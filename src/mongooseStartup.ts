import mongoose from "mongoose";
export default async function startMongoose() {
    await mongoose.connect('mongodb+srv://yashmitsagari:XixJuN43k7mjqh3R@cluster0.qirmdnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}