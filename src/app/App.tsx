import Main from "./Main";

//provider
import {UploadImageProvider } from "../features/uploadImage/provider/UploadImageProvider";
import  {ElementsProvider} from "../app/provider/ElementsProvider";
import { SetButtonProvider } from "../features/setButton/provider/setButtonProvider";

function App(){
    return (
        <div className="App">
            <UploadImageProvider >
                <ElementsProvider>
                    <SetButtonProvider>
                        <Main />
                    </SetButtonProvider>
                </ElementsProvider>
            </UploadImageProvider>
        </div>
    )
}

export default App;