import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { naiveProof, blockTimestampProof } from "../contract";
import Loading from "./components/Loading";
import { Typography } from "@mui/material";
import { generateInput } from "../util";

export default function Verify() {

    const [otp, setOTP] = useState("");
    const [otpDisable, setOtpDisable] = useState(true);
    const [amount, setAmount] = useState("");
    const [amountDisable, setAmountDisable] = useState(true);
    const [recepient, setRecepient] = useState("");
    const [recepientDisable, setRecepientDisable] = useState(true);

    const [confirmation, setConfirmation] = useState("");
    const [success, setSuccess] = useState(false);

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [Verifying, setVerifying] = useState(false);

    const naiveProve = async (event: any) => {
        event.preventDefault();
        setError(false);
        setSuccess(false);

        setVerifying(true);
        if (localStorage.getItem("OTPhashes")) {
            let INPUT = await generateInput(otp)
                .catch((error: any) => {
                    setErrorMsg(error.toString());
                    setError(true);
                    setVerifying(false);
                    throw error;
                });
            console.log(`INPUT:`)
            console.log(INPUT)
            let tx = await naiveProof(INPUT, amount, recepient)
                .catch((error: any) => {
                    setErrorMsg(error.toString());
                    setError(true);
                    setVerifying(false);
                    throw error;
                });
            console.log(tx);
            if(tx.hash){
                setConfirmation(tx.hash)
                setSuccess(true)
            }
            // let txConfirmation = await tx.wait();
            // setConfirmation(txConfirmation.transactionHash);
            // setSuccess(true);
        } else {
            setErrorMsg("No OTP contract address found. Deploy first.");
            setError(true);
            setVerifying(false);
            throw error;
        }

        setVerifying(false);
        event.preventDefault();
    }

    const blockProve = async (event: any) => {
        event.preventDefault();
        setError(false);
        setSuccess(false);

        setVerifying(true);
        if (localStorage.getItem("OTPhashes")) {
            let INPUT = await generateInput(otp);
            let tx = await blockTimestampProof(INPUT)
                .catch((error: any) => {
                    setErrorMsg(error.toString());
                    setError(true);
                    setVerifying(false);
                });
            let txConfirmation = await tx.wait();
            setConfirmation(txConfirmation.transactionHash);
            setSuccess(true);
        } else {
            setErrorMsg("No OTP contract address found. Deploy first.");
            setError(true);
            setVerifying(false);
        }

        setVerifying(false);
        event.preventDefault();
    }

    const aHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value !== "") {
            setOTP(event.target.value);
            setOtpDisable(false);
        }
        else {
            setOtpDisable(true);
        }
    };

    const amountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value !== "") {
            setAmount(event.target.value);
            setAmountDisable(false);
        }
        else {
            setAmountDisable(true);
        }
    };

    const recepientHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value !== "") {
            setRecepient(event.target.value);
            setRecepientDisable(false);
        }
        else {
            setRecepientDisable(true);
        }
    };

    const enterHandler = async (event: any) => {
        if (event.which === "13") {
            event.preventDefault();
        }
    };


    const keyHandler = async (event: any) => {
        if (['e', 'E', '+', '.', 'Enter'].includes(event.key)) {
            event.preventDefault();
        }
    };

    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                width: "99%", maxWidth: 600, margin: 'auto'
            }}
            noValidate
            autoComplete="off"
            textAlign="center"
        >
            <TextField
                id="input-otp"
                label="otp"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                onKeyDown={keyHandler}
                onChange={aHandler}
                onKeyPress={enterHandler}
            /><br />
            <TextField
                id="input-amount"
                label="amount"
                type="string"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
                onChange={amountHandler}
                onKeyPress={enterHandler}
            /><br />
            <TextField
                id="input-recepient"
                label="recepient"
                type="string"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                onKeyDown={keyHandler}
                onChange={recepientHandler}
                onKeyPress={enterHandler}
            /><br />
            
            <Button
                onClick={naiveProve}
                disabled={otpDisable}
                variant="contained">
                Verify and Send
            </Button>
            
            <br /><br />
            {Verifying ? <Loading text="Verifying proof..." /> : <div />}
            {error ? <Alert severity="error" sx={{ textAlign: "left" }}>{errorMsg}</Alert> : <div />}
            {success ? <Typography>Tx hash: {confirmation}</Typography> : <div />}
        </Box>
    );
}