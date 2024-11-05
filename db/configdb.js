import mongoose from 'mongoose';

try {
    mongoose.connect(process.env.MONGODB_CONNECT).then(() => console.log('Base de datos conectada'));
} catch (error) {
    console.log('Error al conectar base de datos', error);
};

export default mongoose;