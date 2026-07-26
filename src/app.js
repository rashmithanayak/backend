import express from "express";
import cors from "cors";
import cooikeParser from "cookie-parser";

const app = expres();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// Parses incoming requests with a JSON body and makes the data available in req.body, rejects the data if it exceeds the limit
app.use(express.json({limit: "10kb"})); 
app.use(express.urlencoded({extended: true, limit: "10kb"})); /* Used when data is submitted from HTML forms.
extended: true allows parsing of nested objects using the qs library.
limit: "10kb" limits the request body size.*/
app.use(express.static("public")); // Serves static files from the public directory.

app.use(cooikeParser());

export default app;