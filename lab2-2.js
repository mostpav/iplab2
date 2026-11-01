// lab2-2.js

// Перевіряє IPv4-адресу: чотири октети від 0 до 255.
function isIPAddress(ip) {
    if (typeof ip !== "string") return false;

    const match = ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
    if (!match) return false;

    return match.slice(1).every(part => {
        const value = Number(part);
        return value >= 0 && value <= 255;
    });
}

// Знаходить перший запис rgba(r, g, b, a); повертає рядок або null.
function findRGBA(text) {
    const match = text.match(/rgba\s*\(\s*(?:\d{1,3}\s*,\s*){3}(?:\d*\.?\d+)\s*\)/i);
    return match ? match[0] : null;
}

// Знаходить перший HEX-колір у форматі #ABC або #ABCDEF.
function findHexColor(text) {
    const match = text.match(/#(?:[0-9a-f]{3}|[0-9a-f]{6})(?![0-9a-f])/i);
    return match ? match[0] : null;
}

// Знаходить усі відкривальні та закривальні теги із заданим ім'ям.
function findTags(text, tag) {
    const escapedTag = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`<\\/?${escapedTag}\\b[^>]*>`, "gi");
    return text.match(regex) || [];
}

// Знаходить додатні числа (цілі або десяткові) у тексті.
function findPosNum(text) {
    const matches = text.match(/(?:^|[^\w.])(?:\d+\.?\d*|\.\d+)(?=$|[^\w.])/g) || [];
    return matches.map(value => Number(value.trim())).filter(value => value > 0);
}

// Знаходить дати у форматі YYYY-MM-DD.
function findDates(text) {
    return text.match(/\b\d{4}-\d{2}-\d{2}\b/g) || [];
}
