// Detect if device is on mobile
let Device = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }

}

const isMobile = typeof window !== 'undefined' ? Device() : false;

module.exports = global.config = {
    isMobile,
    onMobile: isMobile ? "on-Mobile" : ""
}