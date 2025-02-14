import { useState } from "react";
import Typography from "@mui/material/Typography";
import { AppBar, Container } from "@mui/material";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <AppBar position="static">
                <h1>dhsjdhjs</h1>
            </AppBar>
            <p>dsdsd</p>
            <Typography
                variant="h1"
                color="secondary"
                onClick={() => console.log("test on click")}
                sx={{ color: "skyblue" }}
            >
                test tulisan
            </Typography>

            <Container>
                <div></div>
            </Container>
        </>
    );
}

export default App;
