import mongoose,{Schema} from 'mongoose';

const ChatSchema=new Schema(
    {
        //isGroup:
        isGroup:{
            type:Boolean,
            default:false,
        },
        //POarticipants:
        participants:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        //Last Message:
        lastMessage:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
        },
    },
    {
        timestamps:true,
    }
);

export const Chat=mongoose.model("Chat",ChatSchema)