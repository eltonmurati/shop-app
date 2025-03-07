export const InquiryEmail = (fullName: string, email: string, inquiry: string) => {
    return(
        inquiry + "\n\n" + "From," + "\n" + fullName + "\n\n" + email
    );
};

export default InquiryEmail;