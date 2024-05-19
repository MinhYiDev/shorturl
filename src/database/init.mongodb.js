"use strict";
import mongoose from "mongoose";
import "dotenv/config";
import process from "process";

const stringConnect =
    process.env.stringConnect ||
    "mongodb+srv://phamhongsang12x10:PhamSang1210@cluster0.loq8seh.mongodb.net/URL";

class Database {
    constructor() {
        this.connect();
    }

    async connect() {
        try {
            //* num connect
            const numConnect = mongoose.connections.length;
            await mongoose.connect(stringConnect);
            console.log("SUCCESS <3", "\nNum Connect: ", numConnect);
        } catch (error) {
            console.log("ERROR !!!!");
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    }
}

const instanceDatabase = Database.getInstance();

export default instanceDatabase;
