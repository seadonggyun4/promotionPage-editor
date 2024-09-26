import JSZip from 'jszip'; // 라이브러리 import
import { saveAs } from 'file-saver';

export const useWebViewDownload = (uploadedImage: string | ArrayBuffer | null, backgroundImage: string) => {
    const webViewDownload = (): void => {
        const zip = new JSZip();

        const webview = document.querySelector('.webview') as HTMLElement;

        if (webview) {
            const clone = webview.cloneNode(true) as HTMLElement;

            const image = clone.querySelector('#rending') as HTMLImageElement;
            if (image) {
                image.src = uploadedImage ? uploadedImage.toString() : './rendingPage.png';
            }

            const newInnerHTML = clone.innerHTML;

            const htmlTemplate = `
                <!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta charset="utf-8" />
                    <title>web view</title>
                  </head>
                  <body>
                    ${newInnerHTML}
                  </body>
                </html>`;

            zip.file('webview.html', htmlTemplate);

            const imageSrc = uploadedImage ? uploadedImage.toString() : backgroundImage;
            fetch(imageSrc)
                .then(response => response.blob())
                .then(blob => {
                    zip.file('rendingPage.png', blob, { binary: true });
                    return zip.generateAsync({ type: 'blob' });
                })
                .then(content => {
                    saveAs(content, 'webview.zip');
                });
        }
    }

    return { webViewDownload };
};
