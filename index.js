const express = require("express");
const app = express();

var TelegramBot = require("node-telegram-bot-api");

var bot;

try {
    bot = new TelegramBot("6864476930:AAEGlPSgZLfR6AI3Lz2Z6jSG6CM5Q8B4RBY", { polling: true });
} catch (error) {}

const checkTool = (res) => {
    fetch("https://ap.poly.edu.vn/sinh-vien/lich-hoc/schedule", {
        headers: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "vi,en-US;q=0.9,en;q=0.8",
            "cache-control": "no-cache",
            pragma: "no-cache",
            priority: "u=0, i",
            "sec-ch-ua": '"Not/A)Brand";v="8", "Chromium";v="126"',
            "sec-ch-ua-arch": '"arm"',
            "sec-ch-ua-bitness": '"64"',
            "sec-ch-ua-full-version": '"126.0.6478.57"',
            "sec-ch-ua-full-version-list": '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.57"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-model": '""',
            "sec-ch-ua-platform": '"macOS"',
            "sec-ch-ua-platform-version": '"14.5.0"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            cookie: "cf_clearance=6VGX6fDLdo13rjILBbdormEqBoW3TXiRz7Cc4XN6GNs-1718700330-1.0.1.1-Y0N79pGVth2r126Dzll5g20VYpN3MQ9H.mSFZ5uLvVSe.M2eefypUJWxLqzHJdBV8YgFgmMST0z3NolFArfLsQ; PHPSESSID=7h11f0gvb10i50itbqiu1epaqm; XSRF-TOKEN=eyJpdiI6Im5TR21kcCtab2dTV2w1MytSMUYyUXc9PSIsInZhbHVlIjoid1B3a0ppdkgvM1hzdDFOb2FDT0JWSjF0VnRUbDRJN1RpNTJpOVF5WnRzVkUrNWU1QU9JNmgxRVVGQVpac0pjeXIrTVZyeDlaREc4TFZ2TVVqWjY5QjJCSWxWVlVnNHIyVVRLalZpWlczOHpwaW44MFdUVmNTQ212NDR0QVJ0Y0MiLCJtYWMiOiJlODMzNmY1YWM2MmEyZjM1MjI2YjExNzMxNmM0YmUzYTNkYzQyNGIzNjc5ZjM3ZmNmYjgwZTllMTMzZDcwNjY3IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IjdsdzZUV3RLNExTNVVHSnJoanVNRlE9PSIsInZhbHVlIjoiUVJIWnNzQXdJWk9acjMwYXR2cjV0NmlrSGg0aTFCYUtOamJlZTFjdlRvdWt3dS9pNG9RNUo4bzRFV21GODNMdzh4cW82TnpyU1NYWHBCcFdxVzR5dnJtcml5d3BNcGdpcGJhMEZpbDlhL1hlVkdFVWJYSXNMYy9iNG8ramFXamEiLCJtYWMiOiJiOWZlZmQzMjYyZTBiNDQ5M2YyZDg5ZjgwMjZmNDY4OTY4OTBlNGI2NjhlNzQxNGE1ZDViOWE4NzAyNzMxM2I2IiwidGFnIjoiIn0%3D",
            Referer: "https://ap.poly.edu.vn/sinh-vien",
            "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: null,
        method: "GET",
    })
        .then((data) => data.text())
        .then((data) => {
            if (
                data.includes("Thay đổi lịch học") &&
                !data.includes("Sinh viên đăng ký đổi lịch học bắt đầu từ ngày")
            ) {
                res && res.send("<h1  style='color: green; text-align: center'>Đã mở tool đổi lịch học!</h1>");
                // console.log(first)
                bot && bot.sendMessage(937478699, "Đã mở tool đổi lịch học rồi đại ca ơiiiiiiiiiiiii!");
            } else {
                res && res.send("<h1  style='color: red; text-align: center'>Chưa mở tool đổi lịch học đâu cu!</h1>");
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

app.get("/", (req, res, next) => {
    checkTool(res);
});

setTimeout(checkTool, 90000);

app.listen(3000, () => console.log("Apprunnign on port 3000"));
