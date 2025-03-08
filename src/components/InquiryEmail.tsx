export const InquiryEmail = (fullName: string, inquiry: string) => {
    return(
        inquiry + "\n\n" + "From," + "\n" + fullName
    );
};

export default InquiryEmail;