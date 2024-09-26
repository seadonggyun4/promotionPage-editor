import { useState, DragEvent } from 'react';

export const useUploadImage = () => {
    const [uploadedImage, setUploadedImage] = useState<string | ArrayBuffer | null>(null);

    const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        const files = e.dataTransfer.files;

        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setUploadedImage(reader.result); // 이미지 업데이트
            };
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return { uploadedImage, handleDrop, handleDragOver };
};
