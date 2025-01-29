const newsSchema = new mongoose.Schema({
    newsId: { type: String, required: true, unique: true },
    newsType: { type: String, required: true },
    newsDate: { type: Date, default: Date.now },
    newsHeading: { type: String, required: true },
    newsContent: { type: String, required: true },
    stared: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("News", newsSchema);
