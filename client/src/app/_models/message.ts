export interface Message {
    id: number;
    senderID: number;
    senderUsername: string;
    senderPhotoUrl: string;
    recipientId: number;
    recipientUsername: string;
    recipientPhotoUrl: string;
    content: string;
    dataRead?: Date;
    messageSent: Date;
}


