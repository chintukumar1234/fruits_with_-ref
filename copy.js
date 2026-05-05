import { getDatabase, ref, get, set } from "firebase/database";

async function copyDataClient() {
    const db = getDatabase();
    
    // Reference the source path
    const sourceRef = ref(db, 'submit');
    
    try {
        const snapshot = await get(sourceRef);
        
        if (snapshot.exists()) {
            const data = snapshot.val();
            
            // Reference the destination path
            const destinationRef = ref(db, 'submitCopy');
            await set(destinationRef, data);
            
            console.log("Data copied successfully!");
        } else {
            console.log("No data found.");
        }
    } catch (error) {
        console.error("Error copying data: ", error);
    }
}