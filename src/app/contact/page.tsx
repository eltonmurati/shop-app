import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
    return(
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 md:pt-8 pb-16 min-h-max h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)] flex items-center flex-col md:flex-row md:gap-8 xl:gap-16">
            <div className="md:w-1/2 flex flex-col gap-8 w-full">
                <h1 className="text-2xl font-medium">Contact</h1>
                <ContactForm />
            </div>
            <div className="h-[27rem] md:w-1/2 w-full">
                <iframe 
                    width="100%" 
                    height="100%" 
                    className="rounded-md"
                    loading="lazy" 
                    allowFullScreen 
                    src={"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuUOgMssddkgRFtXoMiOh5Bg&key=" + process.env.GOOGLE_MAPS_PUBLIC}
                ></iframe>
            </div>
        </div>
    );
}

export default ContactPage;