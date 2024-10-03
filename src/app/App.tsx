import Main from "./Main";

//provider
import {UploadImageProvider } from "../features/uploadImage/provider/UploadImageProvider";
import  {ElementsProvider} from "../app/provider/ElementsProvider";

function App(){
    return (
        <div className="App">
            <UploadImageProvider >
                <ElementsProvider>
                        <Main />
                </ElementsProvider>
            </UploadImageProvider>
        </div>
    )
}

export default App;