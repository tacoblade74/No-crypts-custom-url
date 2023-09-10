import React, { useState } from 'react';
import Row from '../components/Row';
import Linker from '../components/Linker';
import { useSelector } from 'react-redux';
import copy from 'copy-to-clipboard'

const HomePage = () => {
    const imageLinks = {
        "models": "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/dd9b038c-bd15-43ab-86ab-66e145ad7ff2/width=450/26072158-132340247-8k%20portrait%20of%20beautiful%20cyborg%20with%20brown%20hair,%20intricate,%20elegant,%20highly%20detailed,%20majestic,%20digital%20photography,%20art%20by%20artg_ed.jpeg",
        "character-loras": "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7a14d035-ea42-4049-8466-837f4751a000/width=450/20422-2384249377-masterpiece,%20absurdres%20,1girl,%20haruno%20sakura,forehead%20mark,%20red%20hairband,%20red%20sleeveless%20dress,%20white%20pants,navel,%20%20%20groin,%20%20%20br.jpeg",
    };

    const generatedLinks = useSelector((state) => state.selectedLinks.selectedLinks);
    
    const textAreaStyles = {
        width: '100%',
        height: '100px',
        border: '5px solid green',
        fontSize: '16px',
        borderRadius: '3px',
        resize: 'none',
        overflow: 'auto'
    }
    // State to track whether the copy operation was successful
  const [isCopySuccess, setIsCopySuccess] = useState(false);

  // Function to handle the "Copy to Clipboard" action
  const copyToClipboard = () => {
    const generatedLinksString = generatedLinks.join(', ');

    // Copy the generatedLinksString to the clipboard
    copy(generatedLinksString);

    // Update the copy success state
    setIsCopySuccess(true);

    // Clear the success message after a brief delay (e.g., 2 seconds)
    setTimeout(() => {
      setIsCopySuccess(false);
    }, 2000);
  };
    return (
        <div>
            <Row>
                <Linker text="Models" link="/models" image={imageLinks["models"]} />
                <Linker text="LoRA" link="/loras" image={imageLinks["character-loras"]} />
            </Row>
            <h1 style={{textAlign:'center', color:'green'}}>Generated Links</h1>
            <textarea
                value={generatedLinks}
                readOnly
                style={textAreaStyles}
            />
            <button onClick={copyToClipboard}>Copy to Clipboard</button>
            {isCopySuccess && <div>Text copied to clipboard!</div>}

        </div>
    );
};

export default HomePage;
