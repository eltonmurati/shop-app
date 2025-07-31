"use client"

import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const AddProductImages = ({updateImages}:{updateImages: React.Dispatch<React.SetStateAction<{[k:string]: File} | undefined>>;}) => {
    const [count, setCount] = useState(0);
    const [imageIds, setImageIds] = useState([] as number[]);
    const [images, setImages] = useState<{ [k:number]: File } | undefined>();
    const [error, setError] = useState(false);
    const [maximum, setMaximum] = useState(false);

    const addImage = (imageId:number, image:File) => {
        const newImageIds = [...imageIds];
        newImageIds.push(imageId);
        setImageIds(newImageIds);

        let newImages = {...images};
        newImages[imageId] = image;
        setImages(newImages);
        updateImages(newImages);
    }

    const removeImage = (imageId:number) => {
        const i = imageIds.indexOf(imageId);
        const newImageIds = [...imageIds];
        newImageIds.splice(i, 1);
        setImageIds(newImageIds);

        let newImages = {...images};
        delete newImages[imageId];
        setImages(newImages);
        updateImages(newImages);

        setMaximum(false);
    }

    const onDrop = (acceptedFiles: File[]) => {
        setError(false);

        for (const file of acceptedFiles) {
            if (maximum) { break; }

            if (file.size <= 1048576) {
                setCount(count+1);
                addImage(count, file);
                if (imageIds.length === 3) { setMaximum(true); }
            } else {
                setError(true);
            }
        }
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

    return(
        <>
            <div className="flex gap-8 w-full">
                {imageIds.length > 0 && (
                    <div className="flex gap-8 overflow-auto w-28 grow max-w-max">
                        {imageIds.map((imageId)=>(
                            <div key={imageId} className="ring-2 ring-inset ring-gray-300 rounded-md h-28 w-28 relative shrink-0">
                                <Image 
                                    src={URL.createObjectURL(images![imageId])}
                                    alt="" 
                                    fill
                                    className="object-contain p-1"
                                />
                                <button 
                                    type="button" 
                                    className="absolute w-6 h-6 top-1 right-1 rounded-full bg-white flex items-center justify-center text-red-500 opacity-50 hover:opacity-100 transition-opacity duration-200"
                                    onClick={()=>removeImage(imageId)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                        <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                <div {...getRootProps()} className={"flex-1 min-w-28 ring-2 ring-inset ring-gray-300 flex items-center justify-center rounded-md h-28 p-2 text-gray-400 transition-colors duration-200 " + (!maximum && "cursor-pointer hover:text-blue-700")}>
                    <input {...getInputProps({disabled:maximum})} />
                    {maximum ? (
                        <p>Maximum 4 images</p>
                    ) : (
                        <>
                            {isDragActive ? (
                                <p>Drop images here</p>
                            ) : (
                                <p>Drop images here or click to upload</p>
                            )}
                        </>
                    )}
                </div>
            </div>
            {error && (
                <p className="text-red-500 text-sm">Maximum image size 1MB</p>
            )}
            {imageIds.length > 3 && (
                <button type="button" className="w-max text-red-200 flex gap-1 items-center hover:text-red-500 transition-all duration-200" onClick={()=>{setImageIds([]); setMaximum(false); setImages(undefined); updateImages(undefined);}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                    </svg>
                    Clear
                </button>
            )}
        </>
    );
}

export default AddProductImages;