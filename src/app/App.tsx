import Main from "./Main";

//provider
import {UploadImageProvider } from "../features/uploadImage/provider/UploadImageContext";

function App(){
    return (
        <div className="App">
            <UploadImageProvider >
                <Main />
            </UploadImageProvider>
        </div>
    )
}

export default App;