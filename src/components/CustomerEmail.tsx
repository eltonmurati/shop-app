import { getPriceText } from '@/lib/helpers';
import { Column, Heading, Row, Section, Text, Tailwind } from '@react-email/components';
import * as React from 'react';

interface CustomerEmailProps {
    fullName: string,
    orderId: string,
    subtotal: number,
    shippingAddress: {
        city: string | undefined | null, 
        country: string | undefined | null, 
        line1: string | undefined | null, 
        line2: string | undefined | null, 
        postal_code: string | undefined | null, 
        state: string | undefined | null
    },
    items: {sku:string, name:string, price:number, quantity:number}[],
    shippingFee: number,
    totalAmount: number,
    delivery: boolean,
}

export const CustomerEmail: React.FC<Readonly<CustomerEmailProps>> = ({fullName, orderId, subtotal, shippingAddress, items, shippingFee, totalAmount, delivery}) => {
    return(
        <Tailwind>
            <Section className="py-4 text-center">
                <Heading as="h1" className="mb-0 text-2xl font-medium" style={{fontFamily: "Arial"}}>
                    Thank you for your purchase, {fullName}
                </Heading>
                <Heading as="h2" className="font-normal text-base" style={{fontFamily: "Arial"}}>
                    Order ID: {orderId}
                </Heading>
                <Heading as="h3" className="font-normal text-gray-400 text-base" style={{fontFamily: "Arial"}}>
                    {shippingAddress["line1"]}, {shippingAddress["line2"]}, {shippingAddress["city"]}, {shippingAddress["postal_code"]}
                </Heading>
                <Section className="my-4 rounded-lg border border-solid border-gray-200 p-4 pt-0">
                    <table className="mb-4" width="100%">
                        <tbody>
                            <tr>
                                <th
                                    align="left"
                                    className="border-0 border-b border-solid border-gray-200 py-2"
                                    colSpan={6}
                                >
                                    <Text className="font-medium" style={{fontFamily: "Arial"}}>Product</Text>
                                </th>
                                <th
                                    align="center"
                                    className="border-0 border-b border-solid border-gray-200 py-2"
                                >
                                    <Text className="font-medium" style={{fontFamily: "Arial"}}>Quantity</Text>
                                </th>
                                <th
                                    align="center"
                                    className="border-0 border-b border-solid border-gray-200 py-2"
                                >
                                    <Text className="font-medium" style={{fontFamily: "Arial"}}>Price</Text>
                                </th>
                            </tr>
                            {items.map((item)=>(
                                <tr key={item["sku"]}>
                                    <td
                                        align="left"
                                        className="border-0 border-b border-solid border-gray-200 py-2"
                                        colSpan={6}
                                    >
                                        <Text className="" style={{fontFamily: "Arial"}}>{item.name}</Text>
                                        <Text className='text-gray-400' style={{fontFamily: "Arial"}}>{item.sku}</Text>
                                    </td>
                                    <td
                                        align="center"
                                        className="border-0 border-b border-solid border-gray-200 py-2"
                                    >
                                        <Text style={{fontFamily: "Arial"}}>{item.quantity}</Text>
                                    </td>
                                    <td
                                        align="center"
                                        className="border-0 border-b border-solid border-gray-200 py-2"
                                    >
                                        <Text style={{fontFamily: "Arial"}}>£{getPriceText(item.price)}</Text>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Row>
                        <Column align="left">
                            <Text className="font-medium" style={{fontFamily: "Arial"}}>Subtotal</Text>
                        </Column>
                        <Column align="right">
                            <Text className='font-medium' style={{fontFamily: "Arial"}}>£{getPriceText(subtotal)}</Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column align="left">
                            <Text className='text-gray-400' style={{fontFamily: "Arial"}}>{delivery ? "Shipping" : "Collection"}</Text>
                        </Column>
                        <Column align="right">
                            <Text className='text-gray-400' style={{fontFamily: "Arial"}}>{shippingFee > 0 ? `£${getPriceText(shippingFee)}` : "FREE"}</Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column align="left">
                            <Text className='font-medium text-xl' style={{fontFamily: "Arial"}}>Total</Text>
                        </Column>
                        <Column align="right">
                            <Text className='font-medium text-xl' style={{fontFamily: "Arial"}}>£{getPriceText(totalAmount)}</Text>
                        </Column>
                    </Row>
                </Section>
            </Section>
        </Tailwind>
    );
}

export default CustomerEmail;

export const CustomerEmailText = (
    fullName: string,
    orderId: string,
    subtotal: number,
    shippingAddress: {
        city: string | undefined | null, 
        country: string | undefined | null, 
        line1: string | undefined | null, 
        line2: string | undefined | null, 
        postal_code: string | undefined | null, 
        state: string | undefined | null
    },
    items: {sku:string, name:string, price:number, quantity:number}[],
    shippingFee: number,
    totalAmount: number,
    delivery: boolean,
) => {
    return(
        "Thank you for your purchase!" + "\n\n" +
        "Name: " + fullName + "\n" +
        "Order ID: " + orderId + "\n" +
        "Address: " + shippingAddress + "\n" +
        "Items: " + items + "\n" +
        "Subtotal: " + subtotal + "\n" +
        "Shipping Fee: " + shippingFee + "\n" +
        "Delivery Mode: " + (delivery ? "Delivery" : "Collection") + "\n" +
        "Total: " + totalAmount
    );
}