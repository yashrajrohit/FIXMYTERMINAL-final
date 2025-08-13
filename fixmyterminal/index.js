const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme from localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});

// Solutions database
const solutions = {
    "ModuleNotFoundError": {
        en: {
            why: ["Python cannot find the module you are trying to use."],
            avoid: ["Install the required module before running your code."],
            steps: [
                "Open your terminal or command prompt.",
                "Type: pip install flask",
                "Press Enter and wait for installation.",
                "Run your code again.",
            ],
            command: "pip install flask",
            video: "https://www.youtube.com/embed/Z1RJmh_OqeA",
        },
        hi: {
            why: ["Python को मॉड्यूल नहीं मिल रहा जिसका आप उपयोग कर रहे हैं।"],
            avoid: ["अपने कोड को चलाने से पहले आवश्यक मॉड्यूल इंस्टॉल करें।"],
            steps: [
                "अपने टर्मिनल या कमांड प्रॉम्प्ट को खोलें।",
                "टाइप करें: pip install flask",
                "एंटर दबाएं और इंस्टॉलेशन का इंतजार करें।",
                "फिर से अपना कोड चलाएं।",
            ],
            command: "pip install flask",
            video: "https://www.youtube.com/embed/Z1RJmh_OqeA",
        },
        mr: {
            why: ["Python ला तुम्ही वापरत असलेले मॉड्यूल सापडत नाही."],
            avoid: ["कोड चालवण्यापूर्वी आवश्यक मॉड्यूल इन्स्टॉल करा."],
            steps: [
                "तुमचा टर्मिनल किंवा कमांड प्रॉम्प्ट उघडा.",
                "टाइप करा: pip install flask",
                "एंटर दाबा आणि इन्स्टॉलेशनची प्रतीक्षा करा.",
                "तुमचा कोड पुन्हा चालवा.",
            ],
            command: "pip install flask",
            video: "https://www.youtube.com/embed/Z1RJmh_OqeA",
        },
    },

    "SyntaxError": {
        en: {
            why: [
                "Your Python code has a syntax mistake.",
                "Common causes include missing colons, parentheses, or indentation errors."
            ],
            avoid: [
                "Carefully check your code syntax.",
                "Use an editor with syntax highlighting and linting."
            ],
            steps: [
                "Read the error message to find the problematic line.",
                "Check for missing colons (:) after statements like if, for, while, def, class.",
                "Ensure all parentheses and brackets are properly closed.",
                "Fix the indentation according to Python rules.",
                "Save and run your code again."
            ],
            command: "",
            video: "https://www.youtube.com/embed/OCHMafUnElc" // Example video about Python syntax errors
        },
        hi: {
            why: [
                "आपके Python कोड में वाक्य रचना (Syntax) की गलती है।",
                "सामान्य कारणों में कॉलन (:), पेरेंटेसिस, या इंडेंटेशन की कमी शामिल हैं।"
            ],
            avoid: [
                "अपने कोड की वाक्य रचना ध्यान से जांचें।",
                "ऐसे एडिटर का उपयोग करें जिसमें सिंटैक्स हाईलाइटिंग और लिंटिंग हो।"
            ],
            steps: [
                "एरर मैसेज पढ़ें और समस्या वाली लाइन देखें।",
                "if, for, while, def, class जैसे स्टेटमेंट के बाद कॉलन (:) है या नहीं जांचें।",
                "सुनिश्चित करें कि सभी पेरेंटेसिस और ब्रैकेट बंद हैं।",
                "इंडेंटेशन ठीक करें।",
                "कोड सेव करें और पुनः चलाएं।"
            ],
            command: "",
            video: "https://www.youtube.com/embed/OCHMafUnElc"
        },
        mr: {
            why: [
                "तुमच्या Python कोडमध्ये सिंटॅक्सची (वाक्यरचना) चूक आहे.",
                "सामान्य कारणांमध्ये कॉलन (:), ब्रॅकेट्स, किंवा इंडेंटेशन त्रुटी असू शकतात."
            ],
            avoid: [
                "तुमच्या कोडची वाक्यरचना नीट तपासा.",
                "सिंटॅक्स हायलाइटिंग आणि लिंटिंग करणारा संपादक वापरा."
            ],
            steps: [
                "एरर मेसेज वाचा आणि समस्या असलेली ओळ शोधा.",
                "if, for, while, def, class नंतर कॉलन (:) आहे का ते तपासा.",
                "सर्व ब्रॅकेट्स आणि पॅरेंथेसिस बंद आहेत का याची खात्री करा.",
                "इंडेंटेशन दुरुस्त करा.",
                "कोड सेव्ह करा आणि पुन्हा चालवा."
            ],
            command: "",
            video: "https://www.youtube.com/embed/OCHMafUnElc"
        }
    },

    "IndentationError": {
        en: {
            why: ["Your code has inconsistent indentation."],
            avoid: ["Use only spaces or only tabs consistently in your code."],
            steps: [
                "Check your code for mixed tabs and spaces.",
                "Use a code editor that shows invisible characters.",
                "Replace all tabs with spaces or vice versa.",
                "Run your code again."
            ],
            command: "Fix indentation errors",
            video: "https://www.youtube.com/embed/vXnGptZbTgA"
        },
        hi: {
            why: ["आपके कोड में अनुचित इंडेंटेशन है।"],
            avoid: ["कोड में केवल स्पेस या केवल टैब का लगातार उपयोग करें।"],
            steps: [
                "अपने कोड में मिली-जुली टैब और स्पेस की जांच करें।",
                "ऐसे कोड एडिटर का उपयोग करें जो छिपे हुए कैरेक्टर्स दिखाए।",
                "सभी टैब को स्पेस से या स्पेस को टैब से बदलें।",
                "फिर से कोड चलाएं।"
            ],
            command: "इंडेंटेशन त्रुटियाँ सुधारें",
            video: "https://www.youtube.com/embed/vXnGptZbTgA"
        },
        mr: {
            why: ["तुमच्या कोडमध्ये चुकीचा इंडेंटेशन आहे."],
            avoid: ["कोडमध्ये फक्त स्पेसेस किंवा फक्त टॅब्स वापरा."],
            steps: [
                "मिश्रित टॅब आणि स्पेसेस तपासा.",
                "अदृश्य कॅरेक्टर्स दाखवणारा कोड एडिटर वापरा.",
                "सर्व टॅब्स स्पेसेसने बदला किंवा उलट करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "इंडेंटेशन त्रुटी दुरुस्त करा",
            video: "https://www.youtube.com/embed/vXnGptZbTgA"
        },
        tags: ["python", "indentation", "syntax"]
    },
    "NameError": {
        en: {
            why: ["You are using a variable that hasn't been defined yet."],
            avoid: ["Define variables before you use them."],
            steps: [
                "Check variable spelling.",
                "Declare and assign your variable before using it.",
                "Run your code again."
            ],
            command: "x = 5",
            video: "https://www.youtube.com/embed/6L5QzmFwLIk"
        },
        hi: {
            why: ["आप एक ऐसा वेरिएबल उपयोग कर रहे हैं जिसे परिभाषित नहीं किया गया है।"],
            avoid: ["वेरिएबल का उपयोग करने से पहले उसे परिभाषित करें।"],
            steps: [
                "वेरिएबल की स्पेलिंग जांचें।",
                "वेरिएबल को डिक्लेयर और असाइन करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "x = 5",
            video: "https://www.youtube.com/embed/6L5QzmFwLIk"
        },
        mr: {
            why: ["तुम्ही असं वेरिएबल वापरत आहात जे परिभाषित केलेले नाही."],
            avoid: ["वेरिएबल वापरण्यापूर्वी त्याला डिफाईन करा."],
            steps: [
                "वेरिएबल स्पेलिंग तपासा.",
                "वेरिएबल डिक्लेअर आणि असाइन करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "x = 5",
            video: "https://www.youtube.com/embed/6L5QzmFwLIk"
        },
        tags: ["python", "variables", "nameerror"]
    },
    "TypeError": {
        en: {
            why: ["You're using incompatible types in an operation (e.g., adding string and integer)."],
            avoid: ["Convert values to the same type before operations."],
            steps: [
                "Check the types of the variables.",
                "Convert one type to another if needed.",
                "Run your code again."
            ],
            command: "int('5') + 2",
            video: "https://www.youtube.com/embed/wj0pyXySi88"
        },
        hi: {
            why: ["आप किसी ऑपरेशन में असंगत प्रकार का उपयोग कर रहे हैं (जैसे, स्ट्रिंग और इंटेजर को जोड़ना)।"],
            avoid: ["ऑपरेशन से पहले मानों को एक समान प्रकार में कन्वर्ट करें।"],
            steps: [
                "वेरिएबल के प्रकार जांचें।",
                "जरूरत पड़ने पर एक प्रकार को दूसरे में बदलें।",
                "फिर से कोड चलाएं।"
            ],
            command: "int('5') + 2",
            video: "https://www.youtube.com/embed/wj0pyXySi88"
        },
        mr: {
            why: ["तुम्ही ऑपरेशनमध्ये विसंगत प्रकार वापरत आहात (उदा. स्ट्रिंग आणि इंटेजर जोडणे)."],
            avoid: ["ऑपरेशनपूर्वी मूल्ये सारखे प्रकारात रूपांतरित करा."],
            steps: [
                "वेरिएबल प्रकार तपासा.",
                "गरज असल्यास एक प्रकार दुसऱ्या प्रकारात बदला.",
                "कोड पुन्हा चालवा."
            ],
            command: "int('5') + 2",
            video: "https://www.youtube.com/embed/wj0pyXySi88"
        },
        tags: ["python", "typeerror", "types"]
    },
    "ValueError": {
        en: {
            why: ["You're trying to convert a non-integer string to an integer."],
            avoid: ["Validate inputs before conversion."],
            steps: [
                "Check the input string is a valid number.",
                "Use exception handling while converting.",
                "Run your code again."
            ],
            command: "int('5')",
            video: "https://www.youtube.com/embed/eirjjyP2qcQ"
        },
        hi: {
            why: ["आप एक गैर-इंटेजर स्ट्रिंग को इंटेजर में बदलने की कोशिश कर रहे हैं।"],
            avoid: ["कन्वर्शन से पहले इनपुट को वैलिडेट करें।"],
            steps: [
                "इनपुट स्ट्रिंग सही नंबर है या नहीं जांचें।",
                "कन्वर्शन के दौरान एक्सेप्शन हैंडलिंग का उपयोग करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "int('5')",
            video: "https://www.youtube.com/embed/eirjjyP2qcQ"
        },
        mr: {
            why: ["तुम्ही नॉन-इंटेजर स्ट्रिंगला इंटेजरमध्ये कन्वर्ट करण्याचा प्रयत्न करत आहात."],
            avoid: ["रूपांतरित करण्यापूर्वी इनपुटची पडताळणी करा."],
            steps: [
                "इनपुट स्ट्रिंग वैध नंबर आहे का ते तपासा.",
                "रूपांतर करताना एक्सेप्शन हँडलिंग वापरा.",
                "कोड पुन्हा चालवा."
            ],
            command: "int('5')",
            video: "https://www.youtube.com/embed/eirjjyP2qcQ"
        },
        tags: ["python", "valueerror", "conversion"]
    },

    "ZeroDivisionError": {
        en: {
            why: ["You tried to divide a number by zero."],
            avoid: ["Check the divisor before division."],
            steps: [
                "Check the divisor variable.",
                "Add a condition to prevent division by zero.",
                "Run your code again."
            ],
            command: "if b != 0:\n    a / b",
            video: "https://www.youtube.com/embed/kfA5d5W31hc"
        },
        hi: {
            why: ["आपने किसी संख्या को शून्य से विभाजित करने की कोशिश की।"],
            avoid: ["विभाजक को विभाजन से पहले जांचें।"],
            steps: [
                "विभाजक वेरिएबल जांचें।",
                "शून्य से विभाजन रोकने के लिए कंडीशन जोड़ें।",
                "फिर से कोड चलाएं।"
            ],
            command: "if b != 0:\n    a / b",
            video: "https://www.youtube.com/embed/kfA5d5W31hc"
        },
        mr: {
            why: ["तुम्ही एखाद्या संख्येला शून्याने भाग देण्याचा प्रयत्न केला."],
            avoid: ["भागाकार तपासा."],
            steps: [
                "भागाकार व्हेरिएबल तपासा.",
                "शून्याने भाग देऊ नका अशी अट टाका.",
                "कोड पुन्हा चालवा."
            ],
            command: "if b != 0:\n    a / b",
            video: "https://www.youtube.com/embed/kfA5d5W31hc"
        },
        tags: ["python", "zerodivisionerror", "math"]
    },
    "FileNotFoundError": {
        en: {
            why: ["Python can't find the file you're trying to open."],
            avoid: ["Verify the file path and ensure the file exists."],
            steps: [
                "Check the file path for typos.",
                "Ensure the file exists in the specified location.",
                "Run your code again."
            ],
            command: "open('file.txt')",
            video: "https://www.youtube.com/embed/kfT-5Z4lGkg"
        },
        hi: {
            why: ["Python उस फ़ाइल को नहीं खोज पा रहा है जिसे आप खोलने की कोशिश कर रहे हैं।"],
            avoid: ["फ़ाइल पथ की जांच करें और फ़ाइल मौजूद है या नहीं सुनिश्चित करें।"],
            steps: [
                "फ़ाइल पथ में टाइपो जांचें।",
                "सुनिश्चित करें कि फ़ाइल उस स्थान पर मौजूद है।",
                "फिर से कोड चलाएं।"
            ],
            command: "open('file.txt')",
            video: "https://www.youtube.com/embed/kfT-5Z4lGkg"
        },
        mr: {
            why: ["Python तुम्ही उघडू इच्छित असलेली फाइल सापडत नाही."],
            avoid: ["फाइलचा मार्ग तपासा आणि फाइल अस्तित्वात आहे का ते सुनिश्चित करा."],
            steps: [
                "फाइल मार्गात टायपो तपासा.",
                "फाइल त्या ठिकाणी आहे याची खात्री करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "open('file.txt')",
            video: "https://www.youtube.com/embed/kfT-5Z4lGkg"
        },
        tags: ["python", "filenotfounderror", "file"]
    },

    "PermissionError": {
        en: {
            why: ["Permission denied when accessing a file or directory."],
            avoid: ["Run your program with proper permissions or change file permissions."],
            steps: [
                "Check file or folder permissions.",
                "Run your program as administrator or with sudo.",
                "Try changing permissions with chmod if needed.",
                "Run your code again."
            ],
            command: "sudo python script.py",
            video: "https://www.youtube.com/embed/0HfvcljY2uI"
        },
        hi: {
            why: ["फ़ाइल या डायरेक्टरी तक पहुँचने पर अनुमति अस्वीकृत।"],
            avoid: ["सही अनुमतियों के साथ प्रोग्राम चलाएं या फ़ाइल अनुमतियाँ बदलें।"],
            steps: [
                "फ़ाइल या फ़ोल्डर अनुमतियाँ जांचें।",
                "प्रोग्राम को एडमिनिस्ट्रेटर के रूप में चलाएं।",
                "ज़रूरत पड़ने पर chmod से अनुमतियाँ बदलें।",
                "फिर से कोड चलाएं।"
            ],
            command: "sudo python script.py",
            video: "https://www.youtube.com/embed/0HfvcljY2uI"
        },
        mr: {
            why: ["फाइल किंवा फोल्डर ऍक्सेस करताना परवानगी नाकारली गेली."],
            avoid: ["योग्य परवानग्यांसह प्रोग्राम चालवा किंवा फाइल परवानगी बदला."],
            steps: [
                "फाइल किंवा फोल्डर परवानगी तपासा.",
                "प्रोग्राम अ‍ॅडमिन म्हणून चालवा.",
                "गरज असल्यास chmod ने परवानगी बदला.",
                "कोड पुन्हा चालवा."
            ],
            command: "sudo python script.py",
            video: "https://www.youtube.com/embed/0HfvcljY2uI"
        },
        tags: ["python", "permissionerror", "file", "permissions"]
    },

    "AttributeError": {
        en: {
            why: ["You're trying to access an attribute of a None object."],
            avoid: ["Check if the object is None before accessing its attributes."],
            steps: [
                "Verify the object is properly initialized.",
                "Add checks before accessing attributes.",
                "Run your code again."
            ],
            command: "if obj is not None:\n    obj.x",
            video: "https://www.youtube.com/embed/N8k9sSbJLPQ"
        },
        hi: {
            why: ["आप None ऑब्जेक्ट के एट्रिब्यूट तक पहुंचने की कोशिश कर रहे हैं।"],
            avoid: ["एट्रिब्यूट तक पहुँचने से पहले ऑब्जेक्ट None है या नहीं जांचें।"],
            steps: [
                "ऑब्जेक्ट सही तरीके से इनिशियलाइज़ हुआ है या नहीं देखें।",
                "एट्रिब्यूट एक्सेस करने से पहले चेक लगाएं।",
                "फिर से कोड चलाएं।"
            ],
            command: "if obj is not None:\n    obj.x",
            video: "https://www.youtube.com/embed/N8k9sSbJLPQ"
        },
        mr: {
            why: ["तुम्ही None ऑब्जेक्टचा एट्रिब्युट वापरण्याचा प्रयत्न करत आहात."],
            avoid: ["एट्रिब्युट वापरण्यापूर्वी ऑब्जेक्ट None आहे का ते तपासा."],
            steps: [
                "ऑब्जेक्ट योग्यरित्या इनिशियलाइझ झाला आहे का ते तपासा.",
                "एट्रिब्युट वापरण्यापूर्वी तपासणी करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "if obj is not None:\n    obj.x",
            video: "https://www.youtube.com/embed/N8k9sSbJLPQ"
        },
        tags: ["python", "attributeerror", "objects"]
    },

    "SyntaxError": {
        en: {
            why: ["There's a mistake in your code syntax."],
            avoid: ["Check for missing colons, brackets, or typos."],
            steps: [
                "Look at the line number mentioned in the error.",
                "Correct missing or extra characters.",
                "Run your code again."
            ],
            command: "Fix code syntax",
            video: "https://www.youtube.com/embed/7Ey2Izt5cNI"
        },
        hi: {
            why: ["आपके कोड में सिंटैक्स त्रुटि है।"],
            avoid: ["मिसिंग कॉलन, ब्रैकेट या टाइपो के लिए जांचें।"],
            steps: [
                "एरर में बताए गए लाइन नंबर को देखें।",
                "गुम या अतिरिक्त कैरेक्टर्स ठीक करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "सिंटैक्स त्रुटि ठीक करें",
            video: "https://www.youtube.com/embed/7Ey2Izt5cNI"
        },
        mr: {
            why: ["तुमच्या कोडमध्ये सिंटॅक्स त्रुटी आहे."],
            avoid: ["मिसिंग कॉलन, ब्रॅकेट किंवा टायपो तपासा."],
            steps: [
                "एररमध्ये दाखवलेला लाईन नंबर पहा.",
                "गहाळ किंवा जास्तीचे कॅरेक्टर्स दुरुस्त करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "सिंटॅक्स दुरुस्त करा",
            video: "https://www.youtube.com/embed/7Ey2Izt5cNI"
        },
        tags: ["python", "syntaxerror", "syntax"]
    },

    "ImportError": {
        en: {
            why: ["You're trying to import a name that doesn't exist in the module."],
            avoid: ["Check spelling and module contents before importing."],
            steps: [
                "Verify the name exists in the module.",
                "Check for typos.",
                "Run your code again."
            ],
            command: "from module import correct_name",
            video: "https://www.youtube.com/embed/x-UbJ4dSQJ8"
        },
        hi: {
            why: ["आप किसी नाम को आयात करने की कोशिश कर रहे हैं जो मॉड्यूल में मौजूद नहीं है।"],
            avoid: ["आयात करने से पहले स्पेलिंग और मॉड्यूल सामग्री जांचें।"],
            steps: [
                "सुनिश्चित करें कि नाम मॉड्यूल में मौजूद है।",
                "टाइपो की जांच करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "from module import correct_name",
            video: "https://www.youtube.com/embed/x-UbJ4dSQJ8"
        },
        mr: {
            why: ["तुम्ही असं नाव आयात करण्याचा प्रयत्न करत आहात जे मॉड्यूलमध्ये नाही."],
            avoid: ["आयात करण्यापूर्वी स्पेलिंग आणि मॉड्यूल तपासा."],
            steps: [
                "नाव मॉड्यूलमध्ये आहे का तपासा.",
                "टायपो तपासा.",
                "कोड पुन्हा चालवा."
            ],
            command: "from module import correct_name",
            video: "https://www.youtube.com/embed/x-UbJ4dSQJ8"
        },
        tags: ["python", "importerror", "import"]
    },

    "RuntimeError": {
        en: {
            why: ["Your code caused infinite recursion, exceeding Python's limit."],
            avoid: ["Make sure recursive functions have a base case."],
            steps: [
                "Check your recursive function for a base case.",
                "Add stopping condition to recursion.",
                "Run your code again."
            ],
            command: "def func():\n    if condition:\n        return\n    func()",
            video: "https://www.youtube.com/embed/_Bvn48ch8OE"
        },
        hi: {
            why: ["आपका कोड अनंत पुनरावृत्ति कर रहा है, जिससे Python की सीमा पार हो गई है।"],
            avoid: ["सुनिश्चित करें कि पुनरावृत्ति वाली फ़ंक्शन में एक बेस केस हो।"],
            steps: [
                "अपने recursive फ़ंक्शन में बेस केस जांचें।",
                "रोकने की शर्त जोड़ें।",
                "फिर से कोड चलाएं।"
            ],
            command: "def func():\n    if condition:\n        return\n    func()",
            video: "https://www.youtube.com/embed/_Bvn48ch8OE"
        },
        mr: {
            why: ["तुमचा कोड अनंत पुनरावृत्ती करतोय आणि Python च्या मर्यादेपेक्षा जास्त आहे."],
            avoid: ["recursive फंक्शनमध्ये base case असणे आवश्यक आहे."],
            steps: [
                "recursive फंक्शनमध्ये base case तपासा.",
                "stop condition जोडा.",
                "कोड पुन्हा चालवा."
            ],
            command: "def func():\n    if condition:\n        return\n    func()",
            video: "https://www.youtube.com/embed/_Bvn48ch8OE"
        },
        tags: ["python", "runtimeerror", "recursion"]
    },

    "IndexError": {
        en: {
            why: ["You're trying to access an index in a list that doesn't exist."],
            avoid: ["Make sure the index is within the list length."],
            steps: [
                "Check the length of your list.",
                "Verify your index values before accessing list elements.",
                "Run your code again."
            ],
            command: "my_list = [1, 2, 3]\nprint(my_list[0])",
            video: "https://www.youtube.com/embed/Ly_cG6Ux3mE"
        },
        hi: {
            why: ["आप ऐसी सूची का इंडेक्स एक्सेस कर रहे हैं जो मौजूद नहीं है।"],
            avoid: ["इंडेक्स सूची की लंबाई के अंदर हो।"],
            steps: [
                "अपनी सूची की लंबाई जांचें।",
                "इंडेक्स वैल्यू को एक्सेस करने से पहले जांचें।",
                "फिर से कोड चलाएं।"
            ],
            command: "my_list = [1, 2, 3]\nprint(my_list[0])",
            video: "https://www.youtube.com/embed/Ly_cG6Ux3mE"
        },
        mr: {
            why: ["तुम्ही अशा यादीचा इंडेक्स वापरत आहात जो अस्तित्वात नाही."],
            avoid: ["इंडेक्स यादीच्या लांबीच्या आत असावा."],
            steps: [
                "यादीची लांबी तपासा.",
                "इंडेक्स वापरण्यापूर्वी तपासा.",
                "कोड पुन्हा चालवा."
            ],
            command: "my_list = [1, 2, 3]\nprint(my_list[0])",
            video: "https://www.youtube.com/embed/Ly_cG6Ux3mE"
        },
        tags: ["python", "indexerror", "list"]
    },

    "KeyError": {
        en: {
            why: ["You're trying to access a key in a dictionary that doesn't exist."],
            avoid: ["Check if the key exists before accessing it."],
            steps: [
                "Use the `in` keyword to check for the key.",
                "Use `.get()` method to safely access keys.",
                "Run your code again."
            ],
            command: "my_dict.get('key', 'default_value')",
            video: "https://www.youtube.com/embed/W9khbpkvPlE"
        },
        hi: {
            why: ["आप ऐसे कुंजी को एक्सेस कर रहे हैं जो शब्दकोश में मौजूद नहीं है।"],
            avoid: ["कुंजी एक्सेस करने से पहले जांचें कि वह मौजूद है या नहीं।"],
            steps: [
                "`in` कीवर्ड का उपयोग करके कुंजी जांचें।",
                "सुरक्षित एक्सेस के लिए `.get()` विधि का उपयोग करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "my_dict.get('key', 'default_value')",
            video: "https://www.youtube.com/embed/W9khbpkvPlE"
        },
        mr: {
            why: ["तुम्ही डिक्शनरीमध्ये नसलेला की वापरण्याचा प्रयत्न करत आहात."],
            avoid: ["की वापरण्यापूर्वी ती आहे की नाही तपासा."],
            steps: [
                "`in` कीवर्ड वापरून की तपासा.",
                "सुरक्षितपणे ऍक्सेस करण्यासाठी `.get()` वापरा.",
                "कोड पुन्हा चालवा."
            ],
            command: "my_dict.get('key', 'default_value')",
            video: "https://www.youtube.com/embed/W9khbpkvPlE"
        },
        tags: ["python", "keyerror", "dictionary"]
    },

    "StopIteration": {
        en: {
            why: ["You have exhausted all items in an iterator."],
            avoid: ["Handle iterator exhaustion with try-except or check before iteration."],
            steps: [
                "Use try-except block around iteration.",
                "Check if the iterator has more items before fetching.",
                "Run your code again."
            ],
            command: "try:\n    next(iterator)\nexcept StopIteration:\n    pass",
            video: "https://www.youtube.com/embed/p3UkYH-51Tw"
        },
        hi: {
            why: ["आपने एक इटरेटर के सभी आइटम्स समाप्त कर दिए हैं।"],
            avoid: ["try-except ब्लॉक का उपयोग करें या पहले जांचें।"],
            steps: [
                "इटरेशन के आस-पास try-except ब्लॉक लगाएं।",
                "आइटम्स होने पर ही नेक्स्ट लें।",
                "फिर से कोड चलाएं।"
            ],
            command: "try:\n    next(iterator)\nexcept StopIteration:\n    pass",
            video: "https://www.youtube.com/embed/p3UkYH-51Tw"
        },
        mr: {
            why: ["तुम्ही iterator मधील सर्व आयटम वापरले आहेत."],
            avoid: ["try-except वापरा किंवा तपासा की अजून आयटम आहेत का."],
            steps: [
                "iterator भोवती try-except वापरा.",
                "नेक्स्ट घेण्याआधी तपासा.",
                "कोड पुन्हा चालवा."
            ],
            command: "try:\n    next(iterator)\nexcept StopIteration:\n    pass",
            video: "https://www.youtube.com/embed/p3UkYH-51Tw"
        },
        tags: ["python", "stopiteration", "iterator"]
    },

    "UnicodeDecodeError": {
        en: {
            why: ["Python cannot decode bytes to text because of encoding mismatch."],
            avoid: ["Specify the correct encoding while reading files."],
            steps: [
                "Identify the encoding of your file (e.g., utf-8, latin-1).",
                "Use the encoding parameter in open() function.",
                "Run your code again."
            ],
            command: "open('file.txt', encoding='utf-8')",
            video: "https://www.youtube.com/embed/0b_mwO42fKQ"
        },
        hi: {
            why: ["Python बाइट्स को टेक्स्ट में डिकोड नहीं कर पा रहा है क्योंकि एन्कोडिंग मेल नहीं खा रही।"],
            avoid: ["फ़ाइल पढ़ते समय सही एन्कोडिंग निर्दिष्ट करें।"],
            steps: [
                "फ़ाइल की एन्कोडिंग पहचानें (जैसे utf-8, latin-1)।",
                "open() फ़ंक्शन में encoding पैरामीटर का उपयोग करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "open('file.txt', encoding='utf-8')",
            video: "https://www.youtube.com/embed/0b_mwO42fKQ"
        },
        mr: {
            why: ["Python बाइट्सना टेक्स्टमध्ये डिकोड करू शकत नाही कारण एन्कोडिंग जुळत नाही."],
            avoid: ["फाइल वाचताना योग्य एन्कोडिंग वापरा."],
            steps: [
                "फाइलची एन्कोडिंग ओळखा (उदा. utf-8, latin-1).",
                "open() फंक्शनमध्ये encoding पैरामीटर वापरा.",
                "कोड पुन्हा चालवा."
            ],
            command: "open('file.txt', encoding='utf-8')",
            video: "https://www.youtube.com/embed/0b_mwO42fKQ"
        },
        tags: ["python", "unicodedecodeerror", "encoding", "file"]
    },

    "MemoryError": {
        en: {
            why: ["Your program is trying to use more memory than available."],
            avoid: ["Optimize your code to use less memory or increase memory resources."],
            steps: [
                "Check for large data structures or infinite loops.",
                "Use generators instead of lists when possible.",
                "Run your code again."
            ],
            command: "Use generator: (x for x in range(1000000))",
            video: "https://www.youtube.com/embed/vkvPLc7oYRU"
        },
        hi: {
            why: ["आपका प्रोग्राम उपलब्ध मेमोरी से ज्यादा मेमोरी इस्तेमाल करने की कोशिश कर रहा है।"],
            avoid: ["अपने कोड को मेमोरी कम इस्तेमाल करने के लिए ऑप्टिमाइज़ करें या मेमोरी बढ़ाएं।"],
            steps: [
                "बड़े डेटा स्ट्रक्चर या अनंत लूप्स जांचें।",
                "संभव हो तो लिस्ट की जगह जेनरेटर का उपयोग करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "Use generator: (x for x in range(1000000))",
            video: "https://www.youtube.com/embed/vkvPLc7oYRU"
        },
        mr: {
            why: ["तुमचा प्रोग्राम उपलब्ध मेमरीपेक्षा जास्त मेमरी वापरायचा प्रयत्न करतो आहे."],
            avoid: ["कोड ऑप्टिमाइझ करा किंवा मेमरी वाढवा."],
            steps: [
                "मोठे डेटा स्ट्रक्चर्स किंवा अनंत लूप्स तपासा.",
                "लिस्टच्या ऐवजी जेनरेटर वापरा.",
                "कोड पुन्हा चालवा."
            ],
            command: "Use generator: (x for x in range(1000000))",
            video: "https://www.youtube.com/embed/vkvPLc7oYRU"
        },
        tags: ["python", "memoryerror", "optimization"]
    },

    "RecursionError": {
        en: {
            why: ["Your recursive function exceeded the maximum allowed recursion depth."],
            avoid: ["Make sure your recursive function has a proper base case."],
            steps: [
                "Check that your recursive calls have a stopping condition.",
                "Refactor code to use loops if possible.",
                "Run your code again."
            ],
            command: "def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)",
            video: "https://www.youtube.com/embed/_Bvn48ch8OE"
        },
        hi: {
            why: ["आपकी पुनरावृत्ति फ़ंक्शन अधिकतम पुनरावृत्ति गहराई पार कर गई है।"],
            avoid: ["सुनिश्चित करें कि पुनरावृत्ति फ़ंक्शन में एक बेस केस है।"],
            steps: [
                "जांचें कि पुनरावृत्ति कॉल का कोई बंद होने वाला कंडीशन है।",
                "संभव हो तो कोड को लूप में बदलें।",
                "फिर से कोड चलाएं।"
            ],
            command: "def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)",
            video: "https://www.youtube.com/embed/_Bvn48ch8OE"
        },
        mr: {
            why: ["तुमचा recursive फंक्शन अधिकतम पुनरावृत्ती मर्यादा ओलांडला आहे."],
            avoid: ["recursive फंक्शनमध्ये base case ठेवा."],
            steps: [
                "recursive कॉलमध्ये stop condition आहे का तपासा.",
                "लूप वापरून कोड सुधारण्याचा विचार करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)",
            video: "https://www.youtube.com/embed/_Bvn48ch8OE"
        },
        tags: ["python", "recursionerror", "recursion"]
    },

    "AssertionError": {
        en: {
            why: ["An assert statement failed because its condition was False."],
            avoid: ["Make sure the condition in assert is correct."],
            steps: [
                "Check the condition you are asserting.",
                "Fix the logic causing the assert to fail.",
                "Run your code again."
            ],
            command: "assert x > 0, 'x must be positive'",
            video: "https://www.youtube.com/embed/9OdMlEgL_gQ"
        },
        hi: {
            why: ["एक assert स्टेटमेंट विफल हुआ क्योंकि इसकी शर्त गलत थी।"],
            avoid: ["सुनिश्चित करें कि assert की शर्त सही है।"],
            steps: [
                "assert की शर्त जांचें।",
                "लॉजिक ठीक करें जो assert फेल कर रहा है।",
                "फिर से कोड चलाएं।"
            ],
            command: "assert x > 0, 'x must be positive'",
            video: "https://www.youtube.com/embed/9OdMlEgL_gQ"
        },
        mr: {
            why: ["assert स्टेटमेंट अयशस्वी झाला कारण त्याचा कंडिशन False होता."],
            avoid: ["assert मधील कंडिशन योग्य आहे का ते तपासा."],
            steps: [
                "assert ची अट तपासा.",
                "assert fail होण्यामागची लॉजिक दुरुस्त करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "assert x > 0, 'x must be positive'",
            video: "https://www.youtube.com/embed/9OdMlEgL_gQ"
        },
        tags: ["python", "assertionerror", "assert"]
    },

    "StopAsyncIteration": {
        en: {
            why: ["An asynchronous iterator has no more items."],
            avoid: ["Handle the end of async iteration with try-except or checks."],
            steps: [
                "Use try-except block around async iteration.",
                "Check if async iterator has more items before fetching.",
                "Run your code again."
            ],
            command: "async for item in async_iterator:\n    print(item)",
            video: "https://www.youtube.com/embed/p3UkYH-51Tw"
        },
        hi: {
            why: ["एक असिंक्रोनस इटरेटर के पास और आइटम नहीं हैं।"],
            avoid: ["try-except ब्लॉक या चेक के साथ async iteration को संभालें।"],
            steps: [
                "async iteration के आस-पास try-except ब्लॉक लगाएं।",
                "आइटम्स होने पर ही नेक्स्ट लें।",
                "फिर से कोड चलाएं।"
            ],
            command: "async for item in async_iterator:\n    print(item)",
            video: "https://www.youtube.com/embed/p3UkYH-51Tw"
        },
        mr: {
            why: ["असिंक्रोनस iterator मध्ये अजून आयटम नाहीत."],
            avoid: ["try-except वापरून async iteration हाताळा."],
            steps: [
                "async iteration भोवती try-except वापरा.",
                "आयटम्स आहेत का तपासा.",
                "कोड पुन्हा चालवा."
            ],
            command: "async for item in async_iterator:\n    print(item)",
            video: "https://www.youtube.com/embed/p3UkYH-51Tw"
        },
        tags: ["python", "stopasynciteration", "async", "iterator"]
    },

    "FloatingPointError": {
        en: {
            why: ["An error occurred during a floating point operation."],
            avoid: ["Avoid invalid floating point operations like division by zero."],
            steps: [
                "Check your floating point calculations.",
                "Add error handling if necessary.",
                "Run your code again."
            ],
            command: "try:\n    result = 1.0 / 0.0\nexcept FloatingPointError:\n    pass",
            video: "https://www.youtube.com/embed/6iK4b3V66Fg"
        },
        hi: {
            why: ["फ्लोटिंग पॉइंट ऑपरेशन के दौरान त्रुटि हुई।"],
            avoid: ["शून्य से विभाजन जैसे अमान्य फ्लोटिंग पॉइंट ऑपरेशन से बचें।"],
            steps: [
                "फ्लोटिंग पॉइंट कैलकुलेशन जांचें।",
                "जरूरत पड़े तो एरर हैंडलिंग जोड़ें।",
                "फिर से कोड चलाएं।"
            ],
            command: "try:\n    result = 1.0 / 0.0\nexcept FloatingPointError:\n    pass",
            video: "https://www.youtube.com/embed/6iK4b3V66Fg"
        },
        mr: {
            why: ["फ्लोटिंग पॉइंट ऑपरेशनमध्ये त्रुटी आली आहे."],
            avoid: ["अवैध फ्लोटिंग पॉइंट ऑपरेशन टाळा (उदा. शून्याने भाग देणे)."],
            steps: [
                "फ्लोटिंग पॉइंट कॅलक्युलेशन्स तपासा.",
                "जर गरज असेल तर त्रुटी हाताळा.",
                "कोड पुन्हा चालवा."
            ],
            command: "try:\n    result = 1.0 / 0.0\nexcept FloatingPointError:\n    pass",
            video: "https://www.youtube.com/embed/6iK4b3V66Fg"
        },
        tags: ["python", "floatingpointerror", "math"]
    },

    "ModuleNotFoundError_Specific": {
        en: {
            why: ["Python cannot find the specific module you're trying to import."],
            avoid: ["Install the missing module using pip."],
            steps: [
                "Open terminal.",
                "Run: pip install module_name",
                "Run your code again."
            ],
            command: "pip install requests",
            video: "https://www.youtube.com/embed/Z1RJmh_OqeA"
        },
        hi: {
            why: ["Python उस विशेष मॉड्यूल को नहीं खोज पा रहा है जिसे आप आयात करना चाहते हैं।"],
            avoid: ["pip से आवश्यक मॉड्यूल इंस्टॉल करें।"],
            steps: [
                "टर्मिनल खोलें।",
                "टाइप करें: pip install module_name",
                "फिर से कोड चलाएं।"
            ],
            command: "pip install requests",
            video: "https://www.youtube.com/embed/Z1RJmh_OqeA"
        },
        mr: {
            why: ["Python तुम्ही वापरत असलेले विशिष्ट मॉड्यूल सापडत नाही."],
            avoid: ["pip वापरून मॉड्यूल इन्स्टॉल करा."],
            steps: [
                "टर्मिनल उघडा.",
                "टाइप करा: pip install requests",
                "कोड पुन्हा चालवा."
            ],
            command: "pip install requests",
            video: "https://www.youtube.com/embed/Z1RJmh_OqeA"
        },
        tags: ["python", "modulenotfounderror", "pip"]
    },

    "ImportWarning": {
        en: {
            why: ["There is a warning related to an import statement, possibly deprecated."],
            avoid: ["Check your imports and update deprecated ones."],
            steps: [
                "Check the warning message details.",
                "Update or remove deprecated imports.",
                "Run your code again."
            ],
            command: "Update import statement",
            video: "https://www.youtube.com/embed/GMzJ1FFYDPo"
        },
        hi: {
            why: ["आयात स्टेटमेंट से संबंधित चेतावनी है, संभवतः अप्रचलित।"],
            avoid: ["अपने आयातों को जांचें और अपडेट करें।"],
            steps: [
                "चेतावनी संदेश देखें।",
                "अप्रचलित आयात अपडेट या हटाएं।",
                "फिर से कोड चलाएं।"
            ],
            command: "आयात स्टेटमेंट अपडेट करें",
            video: "https://www.youtube.com/embed/GMzJ1FFYDPo"
        },
        mr: {
            why: ["आयात स्टेटमेंटशी संबंधित चेतावणी आहे, कदाचित deprecated आहे."],
            avoid: ["आयात तपासा आणि अपडेट करा."],
            steps: [
                "चेतावणी संदेश पहा.",
                "deprecated आयात बदला किंवा काढा.",
                "कोड पुन्हा चालवा."
            ],
            command: "आयात स्टेटमेंट अपडेट करा",
            video: "https://www.youtube.com/embed/GMzJ1FFYDPo"
        },
        tags: ["python", "importwarning", "warning"]
    },

    "DeprecationWarning": {
        en: {
            why: ["You are using a feature that will be removed in future versions."],
            avoid: ["Update your code to use the recommended alternatives."],
            steps: [
                "Read the warning message carefully.",
                "Refactor code to avoid deprecated features.",
                "Run your code again."
            ],
            command: "Use updated function or library",
            video: "https://www.youtube.com/embed/GMzJ1FFYDPo"
        },
        hi: {
            why: ["आप एक ऐसी सुविधा का उपयोग कर रहे हैं जो भविष्य में हटा दी जाएगी।"],
            avoid: ["अनुशंसित विकल्पों का उपयोग करने के लिए कोड अपडेट करें।"],
            steps: [
                "चेतावनी संदेश ध्यान से पढ़ें।",
                "कोड को अपडेट करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "अपडेटेड फ़ंक्शन या लाइब्रेरी का उपयोग करें",
            video: "https://www.youtube.com/embed/GMzJ1FFYDPo"
        },
        mr: {
            why: ["तुम्ही अशी सुविधा वापरत आहात जी भविष्यात काढून टाकली जाईल."],
            avoid: ["कोड अपडेट करा आणि पर्यायी सुविधा वापरा."],
            steps: [
                "चेतावणी संदेश नीट वाचा.",
                "कोड सुधारणा करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "अपडेटेड फंक्शन वापरा",
            video: "https://www.youtube.com/embed/GMzJ1FFYDPo"
        },
        tags: ["python", "deprecationwarning", "warning"]
    },

    "KeyboardInterrupt": {
        en: {
            why: ["You manually stopped the program execution (Ctrl+C)."],
            avoid: ["Let the program complete or add graceful exit handling."],
            steps: [
                "Avoid pressing Ctrl+C unless necessary.",
                "Add signal handling in code for graceful exit.",
                "Run your code again."
            ],
            command: "import signal\nsignal.signal(signal.SIGINT, handler)",
            video: "https://www.youtube.com/embed/E7wJTI-1dvQ"
        },
        hi: {
            why: ["आपने मैन्युअल रूप से प्रोग्राम को रोका है (Ctrl+C)।"],
            avoid: ["प्रोग्राम को पूरा होने दें या graceful exit हैंडलिंग जोड़ें।"],
            steps: [
                "Ctrl+C दबाने से बचें जब तक ज़रूरी न हो।",
                "कोड में signal handling जोड़ें।",
                "फिर से कोड चलाएं।"
            ],
            command: "import signal\nsignal.signal(signal.SIGINT, handler)",
            video: "https://www.youtube.com/embed/E7wJTI-1dvQ"
        },
        mr: {
            why: ["तुम्ही मॅन्युअली प्रोग्राम थांबवलं आहे (Ctrl+C)."],
            avoid: ["प्रोग्राम पूर्ण होऊ द्या किंवा graceful exit हाताळा."],
            steps: [
                "Ctrl+C टाळा जोपर्यंत गरज नसेल.",
                "signal handling कोडमध्ये जोडा.",
                "कोड पुन्हा चालवा."
            ],
            command: "import signal\nsignal.signal(signal.SIGINT, handler)",
            video: "https://www.youtube.com/embed/E7wJTI-1dvQ"
        },
        tags: ["python", "keyboardinterrupt", "signal"]
    },

    "OverflowError": {
        en: {
            why: ["A calculation produced a number too large for Python to handle."],
            avoid: ["Check calculations for potential overflow."],
            steps: [
                "Use libraries like `decimal` or `math` for large numbers.",
                "Avoid infinite loops causing overflow.",
                "Run your code again."
            ],
            command: "import math\nmath.exp(700)",
            video: "https://www.youtube.com/embed/6iK4b3V66Fg"
        },
        hi: {
            why: ["कैलकुलेशन में एक संख्या बहुत बड़ी हो गई है जिसे Python संभाल नहीं सकता।"],
            avoid: ["संख्या के ओवरफ्लो की जांच करें।"],
            steps: [
                "`decimal` या `math` लाइब्रेरी का उपयोग करें।",
                "अनंत लूप से बचें।",
                "फिर से कोड चलाएं।"
            ],
            command: "import math\nmath.exp(700)",
            video: "https://www.youtube.com/embed/6iK4b3V66Fg"
        },
        mr: {
            why: ["कॅल्क्युलेशनमुळे फार मोठा नंबर तयार झाला आहे जो Python हाताळू शकत नाही."],
            avoid: ["ओव्हरफ्लो होण्याची शक्यता तपासा."],
            steps: [
                "`decimal` किंवा `math` लायब्ररी वापरा.",
                "अनंत लूप टाळा.",
                "कोड पुन्हा चालवा."
            ],
            command: "import math\nmath.exp(700)",
            video: "https://www.youtube.com/embed/6iK4b3V66Fg"
        },
        tags: ["python", "overflowerror", "math"]
    },

    "ZeroDivisionError": {
        en: {
            why: ["You tried to divide a number by zero, which is undefined."],
            avoid: ["Check divisor is not zero before division."],
            steps: [
                "Add checks before dividing.",
                "Handle zero divisor cases gracefully.",
                "Run your code again."
            ],
            command: "if divisor != 0:\n    result = numerator / divisor",
            video: "https://www.youtube.com/embed/H3dIYhtgZ1k"
        },
        hi: {
            why: ["आपने किसी संख्या को शून्य से विभाजित करने की कोशिश की है, जो असंभव है।"],
            avoid: ["विभाजक शून्य न हो यह जांचें।"],
            steps: [
                "डिवीजन से पहले चेक लगाएं।",
                "शून्य विभाजक के केस हैंडल करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "if divisor != 0:\n    result = numerator / divisor",
            video: "https://www.youtube.com/embed/H3dIYhtgZ1k"
        },
        mr: {
            why: ["तुम्ही एखाद्या नंबरला शून्याने भाग देण्याचा प्रयत्न केला आहे, जो परिभाषित नाही."],
            avoid: ["भाग देण्यापूर्वी divisor शून्य नाही याची खात्री करा."],
            steps: [
                "भाग देण्यापूर्वी तपासा.",
                "शून्य divisor केस हाताळा.",
                "कोड पुन्हा चालवा."
            ],
            command: "if divisor != 0:\n    result = numerator / divisor",
            video: "https://www.youtube.com/embed/H3dIYhtgZ1k"
        },
        tags: ["python", "zerodivisionerror", "division"]
    },

    "ValueError": {
        en: {
            why: ["You passed an argument of the right type but invalid value."],
            avoid: ["Check input values before using them."],
            steps: [
                "Validate your inputs.",
                "Add error handling.",
                "Run your code again."
            ],
            command: "int('123')",
            video: "https://www.youtube.com/embed/Zz7ZfCtyX70"
        },
        hi: {
            why: ["आपने सही प्रकार का लेकिन अमान्य मान पास किया है।"],
            avoid: ["इन्पुट मान जांचें।"],
            steps: [
                "अपने इनपुट वैल्यूज को वैध करें।",
                "एरर हैंडलिंग जोड़ें।",
                "फिर से कोड चलाएं।"
            ],
            command: "int('123')",
            video: "https://www.youtube.com/embed/Zz7ZfCtyX70"
        },
        mr: {
            why: ["तुम्ही योग्य प्रकार पण अवैध मूल्य दिले आहे."],
            avoid: ["इनपुट व्हॅल्यू तपासा."],
            steps: [
                "इनपुटची वैधता तपासा.",
                "त्रुटी हाताळणी करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "int('123')",
            video: "https://www.youtube.com/embed/Zz7ZfCtyX70"
        },
        tags: ["python", "valueerror", "input"]
    },

    "TypeError": {
        en: {
            why: ["You used an operation on a wrong data type."],
            avoid: ["Check data types before operations."],
            steps: [
                "Verify variable types.",
                "Convert types if necessary.",
                "Run your code again."
            ],
            command: "str(123)",
            video: "https://www.youtube.com/embed/7QXb9xIUEs0"
        },
        hi: {
            why: ["आपने गलत डेटा टाइप पर ऑपरेशन किया है।"],
            avoid: ["ऑपरेशन से पहले डेटा टाइप जांचें।"],
            steps: [
                "वेरिएबल के प्रकार जांचें।",
                "आवश्यकता हो तो टाइप बदलें।",
                "फिर से कोड चलाएं।"
            ],
            command: "str(123)",
            video: "https://www.youtube.com/embed/7QXb9xIUEs0"
        },
        mr: {
            why: ["तुम्ही चुकीच्या डेटा टाइपवर ऑपरेशन केलं आहे."],
            avoid: ["ऑपरेशनपूर्वी डेटा टाइप तपासा."],
            steps: [
                "व्हेरिएबल टाइप तपासा.",
                "आवश्यक असल्यास टाइप कन्व्हर्ट करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "str(123)",
            video: "https://www.youtube.com/embed/7QXb9xIUEs0"
        },
        tags: ["python", "typeerror", "datatype"]
    },

    "EOFError": {
        en: {
            why: ["Input() reached EOF without reading any data."],
            avoid: ["Make sure input is provided."],
            steps: [
                "Check your input sources.",
                "Avoid calling input() without data.",
                "Run your code again."
            ],
            command: "input('Enter something: ')",
            video: "https://www.youtube.com/embed/iqRG1sdSbzM"
        },
        hi: {
            why: ["input() ने बिना डाटा पढ़े EOF पर पहुंच गया।"],
            avoid: ["सुनिश्चित करें कि इनपुट दिया गया है।"],
            steps: [
                "इनपुट स्रोत जांचें।",
                "data के बिना input() कॉल न करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "input('Enter something: ')",
            video: "https://www.youtube.com/embed/iqRG1sdSbzM"
        },
        mr: {
            why: ["input() ने EOF पर्यंत कोणताही डेटा वाचला नाही."],
            avoid: ["इनपुट आहे याची खात्री करा."],
            steps: [
                "इनपुट स्रोत तपासा.",
                "डेटा नसताना input() कॉल करू नका.",
                "कोड पुन्हा चालवा."
            ],
            command: "input('Enter something: ')",
            video: "https://www.youtube.com/embed/iqRG1sdSbzM"
        },
        tags: ["python", "eoferror", "input"]
    },

    "NameError": {
        en: {
            why: ["You used a variable or function name that was not defined."],
            avoid: ["Make sure the variable or function is defined before use."],
            steps: [
                "Check for typos in variable or function names.",
                "Define variables or functions before using them.",
                "Run your code again."
            ],
            command: "x = 5\nprint(x)",
            video: "https://www.youtube.com/embed/k6U-i4gXkLM"
        },
        hi: {
            why: ["आपने ऐसा नाम इस्तेमाल किया जो डिफाइंड नहीं है।"],
            avoid: ["सुनिश्चित करें कि वेरिएबल या फ़ंक्शन पहले डिफ़ाइंड है।"],
            steps: [
                "नाम में टाइपो न हो इसका ध्यान रखें।",
                "पहले वेरिएबल या फ़ंक्शन डिफ़ाइंड करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "x = 5\nprint(x)",
            video: "https://www.youtube.com/embed/k6U-i4gXkLM"
        },
        mr: {
            why: ["तुम्ही असा नाव वापरला जे परिभाषित नाही आहे."],
            avoid: ["व्हेरिएबल किंवा फंक्शन आधी परिभाषित करा."],
            steps: [
                "नावात टायपो नाही याची खात्री करा.",
                "व्हेरिएबल किंवा फंक्शन आधी डिफाइन करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "x = 5\nprint(x)",
            video: "https://www.youtube.com/embed/k6U-i4gXkLM"
        },
        tags: ["python", "nameerror", "variable"]
    },

    "IndentationError": {
        en: {
            why: ["Python requires proper indentation; it's missing or incorrect."],
            avoid: ["Use consistent indentation (spaces or tabs) throughout your code."],
            steps: [
                "Check the lines with indentation errors.",
                "Fix indentation to be consistent.",
                "Run your code again."
            ],
            command: "def func():\n    print('Hello')",
            video: "https://www.youtube.com/embed/zgVTGCg8hp0"
        },
        hi: {
            why: ["Python में उचित इंडेंटेशन आवश्यक है; यह गलत या गायब है।"],
            avoid: ["संपूर्ण कोड में इंडेंटेशन एक जैसा रखें।"],
            steps: [
                "गलत इंडेंटेशन वाली लाइन देखें।",
                "इंडेंटेशन ठीक करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "def func():\n    print('Hello')",
            video: "https://www.youtube.com/embed/zgVTGCg8hp0"
        },
        mr: {
            why: ["Python मध्ये योग्य इंडेंटेशन आवश्यक आहे; ते चुकले आहे किंवा नाही आहे."],
            avoid: ["संपूर्ण कोडमध्ये सारखे इंडेंटेशन वापरा."],
            steps: [
                "इंडेंटेशन चुक असलेल्या ओळी तपासा.",
                "इंडेंटेशन दुरुस्त करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "def func():\n    print('Hello')",
            video: "https://www.youtube.com/embed/zgVTGCg8hp0"
        },
        tags: ["python", "indentationerror", "syntax"]
    },

    "TabError": {
        en: {
            why: ["You mixed tabs and spaces for indentation."],
            avoid: ["Use either tabs or spaces consistently for indentation."],
            steps: [
                "Configure your editor to insert spaces instead of tabs.",
                "Replace tabs with spaces in your code.",
                "Run your code again."
            ],
            command: "Convert tabs to spaces in editor settings",
            video: "https://www.youtube.com/embed/f0XpD26b0_o"
        },
        hi: {
            why: ["आपने इंडेंटेशन में टैब और स्पेस को मिलाया है।"],
            avoid: ["इंडेंटेशन में सिर्फ टैब या सिर्फ स्पेस का उपयोग करें।"],
            steps: [
                "एडिटर सेटिंग में स्पेस इस्तेमाल करने का विकल्प चुनें।",
                "कोड में टैब को स्पेस से बदलें।",
                "फिर से कोड चलाएं।"
            ],
            command: "Convert tabs to spaces in editor settings",
            video: "https://www.youtube.com/embed/f0XpD26b0_o"
        },
        mr: {
            why: ["तुम्ही इंडेंटेशनसाठी tabs आणि spaces मिसळले आहेत."],
            avoid: ["इंडेंटेशनसाठी tabs किंवा spaces एकसारखे वापरा."],
            steps: [
                "एडिटर सेटिंगमध्ये spaces वापरा.",
                "कोडमधील tabs spaces मध्ये बदला.",
                "कोड पुन्हा चालवा."
            ],
            command: "Convert tabs to spaces in editor settings",
            video: "https://www.youtube.com/embed/f0XpD26b0_o"
        },
        tags: ["python", "taberror", "indentation"]
    },

    "IOError": {
        en: {
            why: ["Problem with input/output operation (like reading/writing files)."],
            avoid: ["Check if file exists and you have permission."],
            steps: [
                "Make sure file path is correct.",
                "Check file permissions.",
                "Run your code again."
            ],
            command: "open('file.txt', 'r')",
            video: "https://www.youtube.com/embed/Zu6g6uh6bZU"
        },
        hi: {
            why: ["इनपुट/आउटपुट ऑपरेशन में समस्या (जैसे फाइल पढ़ना/लिखना)।"],
            avoid: ["जांचें कि फाइल मौजूद है और आपके पास अनुमति है।"],
            steps: [
                "फाइल का पथ सही है यह सुनिश्चित करें।",
                "फाइल अनुमति जांचें।",
                "फिर से कोड चलाएं।"
            ],
            command: "open('file.txt', 'r')",
            video: "https://www.youtube.com/embed/Zu6g6uh6bZU"
        },
        mr: {
            why: ["इनपुट/आउटपुट ऑपरेशनमध्ये त्रुटी (जसे फाइल वाचन/लेखन)."],
            avoid: ["फाइल अस्तित्वात आहे आणि परवानगी आहे का ते तपासा."],
            steps: [
                "फाइलचा पथ बरोबर आहे याची खात्री करा.",
                "फाइल परवानगी तपासा.",
                "कोड पुन्हा चालवा."
            ],
            command: "open('file.txt', 'r')",
            video: "https://www.youtube.com/embed/Zu6g6uh6bZU"
        },
        tags: ["python", "ioerror", "oserror", "file"]
    },

    "AttributeError": {
        en: {
            why: ["You tried to access an attribute or method that does not exist on an object."],
            avoid: ["Check the object and attribute names are correct."],
            steps: [
                "Verify the attribute/method exists for the object.",
                "Fix typos in attribute names.",
                "Run your code again."
            ],
            command: "list = []\nlist.append(1)",
            video: "https://www.youtube.com/embed/L6fX7eW5FAI"
        },
        hi: {
            why: ["आपने किसी ऑब्जेक्ट पर मौजूद नहीं एट्रिब्यूट या मेथड को एक्सेस किया।"],
            avoid: ["चेक करें कि एट्रिब्यूट और ऑब्जेक्ट नाम सही हैं।"],
            steps: [
                "पक्का करें कि एट्रिब्यूट/मेथड ऑब्जेक्ट पर मौजूद है।",
                "नामों में टाइपो ठीक करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "list = []\nlist.append(1)",
            video: "https://www.youtube.com/embed/L6fX7eW5FAI"
        },
        mr: {
            why: ["तुम्ही एखाद्या ऑब्जेक्टवर नसलेला attribute किंवा method access करण्याचा प्रयत्न केला आहे."],
            avoid: ["ऑब्जेक्ट आणि attribute नावे तपासा."],
            steps: [
                "attribute/method ऑब्जेक्टवर आहे का तपासा.",
                "नावांमध्ये टायपो दुरुस्त करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "list = []\nlist.append(1)",
            video: "https://www.youtube.com/embed/L6fX7eW5FAI"
        },
        tags: ["python", "attributeerror", "object"]
    },

    "StopIteration": {
        en: {
            why: ["Iterator has no more elements to provide."],
            avoid: ["Check for the end of iteration before calling next()."],
            steps: [
                "Use try-except block around next() calls.",
                "Or use loops which handle StopIteration automatically.",
                "Run your code again."
            ],
            command: "iterator = iter([1, 2])\ntry:\n    while True:\n        print(next(iterator))\nexcept StopIteration:\n    pass",
            video: "https://www.youtube.com/embed/1GpTL1XBHDs"
        },
        hi: {
            why: ["इटरेटर के पास और आइटम नहीं हैं।"],
            avoid: ["next() कॉल से पहले इटरेटर के अंत की जाँच करें।"],
            steps: [
                "next() कॉल के आस-पास try-except ब्लॉक लगाएं।",
                "या ऐसे लूप का उपयोग करें जो StopIteration संभाले।",
                "फिर से कोड चलाएं।"
            ],
            command: "iterator = iter([1, 2])\ntry:\n    while True:\n        print(next(iterator))\nexcept StopIteration:\n    pass",
            video: "https://www.youtube.com/embed/1GpTL1XBHDs"
        },
        mr: {
            why: ["Iterator मध्ये अजून आयटम नाहीत."],
            avoid: ["next() कॉल करण्यापूर्वी iterator चा शेवट तपासा."],
            steps: [
                "next() भोवती try-except वापरा.",
                "किंवा StopIteration हाताळणारा लूप वापरा.",
                "कोड पुन्हा चालवा."
            ],
            command: "iterator = iter([1, 2])\ntry:\n    while True:\n        print(next(iterator))\nexcept StopIteration:\n    pass",
            video: "https://www.youtube.com/embed/1GpTL1XBHDs"
        },
        tags: ["python", "stopiteration", "iterator"]
    },

    "ImportError": {
        en: {
            why: ["Python failed to import a module or package."],
            avoid: ["Check module name and installation."],
            steps: [
                "Verify module name is correct.",
                "Install module if missing.",
                "Run your code again."
            ],
            command: "pip install module_name",
            video: "https://www.youtube.com/embed/85-S6X4vsAI"
        },
        hi: {
            why: ["Python मॉड्यूल या पैकेज को इम्पोर्ट करने में असफल रहा।"],
            avoid: ["मॉड्यूल का नाम और इंस्टॉलेशन जांचें।"],
            steps: [
                "मॉड्यूल नाम सही है यह जांचें।",
                "मॉड्यूल इंस्टॉल करें यदि गायब है।",
                "फिर से कोड चलाएं।"
            ],
            command: "pip install module_name",
            video: "https://www.youtube.com/embed/85-S6X4vsAI"
        },
        mr: {
            why: ["Python मॉड्यूल किंवा पॅकेज इम्पोर्ट करण्यात अयशस्वी झाला."],
            avoid: ["मॉड्यूल नाव आणि इंस्टॉलेशन तपासा."],
            steps: [
                "मॉड्यूल नाव बरोबर आहे का तपासा.",
                "मॉड्यूल इन्स्टॉल करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "pip install module_name",
            video: "https://www.youtube.com/embed/85-S6X4vsAI"
        },
        tags: ["python", "importerror", "module"]
    },

    "RuntimeWarning": {
        en: {
            why: ["Python gives a warning during runtime (e.g., deprecated use)."],
            avoid: ["Read warning message and update code if needed."],
            steps: [
                "Check warning details.",
                "Fix code causing the warning.",
                "Run your code again."
            ],
            command: "Use updated syntax or libraries",
            video: "https://www.youtube.com/embed/R4L2dzv7Rb4"
        },
        hi: {
            why: ["रनटाइम के दौरान Python चेतावनी देता है (जैसे अप्रचलित उपयोग)।"],
            avoid: ["चेतावनी संदेश पढ़ें और आवश्यकतानुसार कोड अपडेट करें।"],
            steps: [
                "चेतावनी विवरण देखें।",
                "कोड ठीक करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "अपडेटेड सिंटैक्स या लाइब्रेरी का उपयोग करें",
            video: "https://www.youtube.com/embed/R4L2dzv7Rb4"
        },
        mr: {
            why: ["रनटाइममध्ये Python चेतावणी देते (उदा. deprecated वापर)."],
            avoid: ["चेतावणी वाचा आणि कोड अपडेट करा."],
            steps: [
                "चेतावणी तपासा.",
                "कोड दुरुस्त करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "अपडेटेड सिंटॅक्स वापरा",
            video: "https://www.youtube.com/embed/R4L2dzv7Rb4"
        },
        tags: ["python", "runtimewarning", "warning"]
    },

    "UnicodeError": {
        en: {
            why: ["Error occurred in encoding or decoding Unicode data."],
            avoid: ["Use correct encoding and decoding methods."],
            steps: [
                "Identify the encoding used.",
                "Use the proper encoding in your code.",
                "Run your code again."
            ],
            command: "text.encode('utf-8')",
            video: "https://www.youtube.com/embed/ChKluNvtQXM"
        },
        hi: {
            why: ["यूनिकोड डाटा को एन्कोड या डिकोड करते समय त्रुटि हुई।"],
            avoid: ["सही एन्कोडिंग और डिकोडिंग विधि का उपयोग करें।"],
            steps: [
                "एन्कोडिंग पहचानें।",
                "कोड में सही एन्कोडिंग का उपयोग करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "text.encode('utf-8')",
            video: "https://www.youtube.com/embed/ChKluNvtQXM"
        },
        mr: {
            why: ["युनिकोड डेटा एन्कोड किंवा डिकोड करताना त्रुटी आली."],
            avoid: ["योग्य एन्कोडिंग वापरा."],
            steps: [
                "एन्कोडिंग ओळखा.",
                "योग्य एन्कोडिंग वापरा.",
                "कोड पुन्हा चालवा."
            ],
            command: "text.encode('utf-8')",
            video: "https://www.youtube.com/embed/ChKluNvtQXM"
        },
        tags: ["python", "unicodeerror", "encoding"]
    },

    "BlockingIOError": {
        en: {
            why: ["Non-blocking operation would block the program."],
            avoid: ["Use blocking mode or handle blocking exceptions."],
            steps: [
                "Check if non-blocking mode is necessary.",
                "Switch to blocking mode if possible.",
                "Run your code again."
            ],
            command: "file_obj.setblocking(True)",
            video: "https://www.youtube.com/embed/8fS3cG3hNxc"
        },
        hi: {
            why: ["नॉन-ब्लॉकिंग ऑपरेशन प्रोग्राम को ब्लॉक कर देगा।"],
            avoid: ["ब्लॉकिंग मोड का उपयोग करें या ब्लॉकिंग एक्सेप्शन संभालें।"],
            steps: [
                "जांचें कि नॉन-ब्लॉकिंग मोड जरूरी है।",
                "संभव हो तो ब्लॉकिंग मोड पर जाएं।",
                "फिर से कोड चलाएं।"
            ],
            command: "file_obj.setblocking(True)",
            video: "https://www.youtube.com/embed/8fS3cG3hNxc"
        },
        mr: {
            why: ["नॉन-ब्लॉकिंग ऑपरेशन प्रोग्राम ब्लॉक करेल."],
            avoid: ["ब्लॉकिंग मोड वापरा किंवा एक्सेप्शन हँडल करा."],
            steps: [
                "नॉन-ब्लॉकिंग मोड आवश्यक आहे का तपासा.",
                "ब्लॉकिंग मोड वापरा.",
                "कोड पुन्हा चालवा."
            ],
            command: "file_obj.setblocking(True)",
            video: "https://www.youtube.com/embed/8fS3cG3hNxc"
        },
        tags: ["python", "blockingioerror", "io"]
    },

    "RuntimeError": {
        en: {
            why: ["An error occurred that doesn’t fall into other categories."],
            avoid: ["Check your code logic and environment."],
            steps: [
                "Read error message carefully.",
                "Debug your code.",
                "Run your code again."
            ],
            command: "print('Check your code logic')",
            video: "https://www.youtube.com/embed/JlY7O4RxlDc"
        },
        hi: {
            why: ["कोड में ऐसी त्रुटि जो अन्य श्रेणियों में नहीं आती।"],
            avoid: ["अपने कोड लॉजिक और पर्यावरण की जांच करें।"],
            steps: [
                "त्रुटि संदेश ध्यान से पढ़ें।",
                "कोड डिबग करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "print('Check your code logic')",
            video: "https://www.youtube.com/embed/JlY7O4RxlDc"
        },
        mr: {
            why: ["कोडमध्ये अशी त्रुटी जी इतर वर्गात नाही येत."],
            avoid: ["तुमच्या कोडचा लॉजिक आणि एन्व्हायर्नमेंट तपासा."],
            steps: [
                "त्रुटी संदेश काळजीपूर्वक वाचा.",
                "कोड डिबग करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "print('Check your code logic')",
            video: "https://www.youtube.com/embed/JlY7O4RxlDc"
        },
        tags: ["python", "runtimeerror", "error"]
    },

    "ModuleNotFoundError": {
        en: {
            why: ["Python cannot find the specified module."],
            avoid: ["Ensure module is installed and name is correct."],
            steps: [
                "Check spelling of the module name.",
                "Install the module using pip.",
                "Run your code again."
            ],
            command: "pip install module_name",
            video: "https://www.youtube.com/embed/YV24IGEGNLM"
        },
        hi: {
            why: ["Python निर्दिष्ट मॉड्यूल नहीं ढूंढ पा रहा है।"],
            avoid: ["सुनिश्चित करें कि मॉड्यूल इंस्टॉल है और नाम सही है।"],
            steps: [
                "मॉड्यूल नाम की वर्तनी जांचें।",
                "pip से मॉड्यूल इंस्टॉल करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "pip install module_name",
            video: "https://www.youtube.com/embed/YV24IGEGNLM"
        },
        mr: {
            why: ["Python निर्दिष्ट मॉड्यूल सापडत नाही."],
            avoid: ["मॉड्यूल इंस्टॉल आहे आणि नाव बरोबर आहे याची खात्री करा."],
            steps: [
                "मॉड्यूल नाव तपासा.",
                "pip वापरून मॉड्यूल इन्स्टॉल करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "pip install module_name",
            video: "https://www.youtube.com/embed/YV24IGEGNLM"
        },
        tags: ["python", "modulenotfounderror", "module"]
    },

    "RecursionError": {
        en: {
            why: ["Your function calls itself too many times causing stack overflow."],
            avoid: ["Make sure recursion has a base case to stop."],
            steps: [
                "Check your recursive function for base condition.",
                "Reduce recursion depth if possible.",
                "Run your code again."
            ],
            command: "def factorial(n):\n    if n==0:\n        return 1\n    else:\n        return n*factorial(n-1)",
            video: "https://www.youtube.com/embed/hMtZSyD9rjk"
        },
        hi: {
            why: ["आपका फ़ंक्शन बहुत बार खुद को कॉल कर रहा है, जिससे स्टैक ओवरफ़्लो होता है।"],
            avoid: ["रिकर्शन में बेस केस होना चाहिए जो रुकने का काम करे।"],
            steps: [
                "अपने रेकर्सिव फ़ंक्शन में बेस केस चेक करें।",
                "रिकर्शन की गहराई कम करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "def factorial(n):\n    if n==0:\n        return 1\n    else:\n        return n*factorial(n-1)",
            video: "https://www.youtube.com/embed/hMtZSyD9rjk"
        },
        mr: {
            why: ["तुमचा फंक्शन खूप वेळा स्वतःला कॉल करत आहे ज्यामुळे स्टॅक ओव्हरफ्लो होतो."],
            avoid: ["रेकर्शनमध्ये बेस केस असावा जो थांबवेल."],
            steps: [
                "रेकर्सिव्ह फंक्शनमध्ये बेस कंडिशन तपासा.",
                "रेकर्शन डीप्थ कमी करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "def factorial(n):\n    if n==0:\n        return 1\n    else:\n        return n*factorial(n-1)",
            video: "https://www.youtube.com/embed/hMtZSyD9rjk"
        },
        tags: ["python", "recursionerror", "recursion"]
    },

    "MemoryError": {
        en: {
            why: ["Your program used more memory than available."],
            avoid: ["Optimize your code and data usage."],
            steps: [
                "Avoid loading very large data at once.",
                "Use generators or stream data if possible.",
                "Run your code again."
            ],
            command: "Use generators for large data processing",
            video: "https://www.youtube.com/embed/0z5eNZN6kq0"
        },
        hi: {
            why: ["आपके प्रोग्राम ने उपलब्ध मेमोरी से ज्यादा उपयोग किया।"],
            avoid: ["कोड और डेटा उपयोग को ऑप्टिमाइज़ करें।"],
            steps: [
                "बहुत बड़ा डेटा एक बार में लोड न करें।",
                "संभावित हो तो जेनरेटर या स्ट्रीम डेटा का उपयोग करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "Use generators for large data processing",
            video: "https://www.youtube.com/embed/0z5eNZN6kq0"
        },
        mr: {
            why: ["तुमच्या प्रोग्रामने उपलब्ध मेमरीपेक्षा जास्त वापर केला आहे."],
            avoid: ["कोड आणि डेटा वापर ऑप्टिमाइझ करा."],
            steps: [
                "मोठा डेटा एकावेळी लोड करू नका.",
                "Generators किंवा stream वापरा.",
                "कोड पुन्हा चालवा."
            ],
            command: "Use generators for large data processing",
            video: "https://www.youtube.com/embed/0z5eNZN6kq0"
        },
        tags: ["python", "memoryerror", "memory"]
    },

    "KeyboardInterrupt": {
        en: {
            why: ["You interrupted the program manually (Ctrl+C)."],
            avoid: ["Let the program finish or handle the interruption in code."],
            steps: [
                "Avoid pressing Ctrl+C unless needed.",
                "Add signal handling in code if required.",
                "Run your code again."
            ],
            command: "import signal\nsignal.signal(signal.SIGINT, handler)",
            video: "https://www.youtube.com/embed/E7wJTI-1dvQ"
        },
        hi: {
            why: ["आपने प्रोग्राम को मैन्युअली रोका (Ctrl+C)।"],
            avoid: ["प्रोग्राम को पूरा होने दें या कोड में हैंडलिंग करें।"],
            steps: [
                "Ctrl+C तभी दबाएं जब जरूरी हो।",
                "कोड में signal handling जोड़ें।",
                "फिर से कोड चलाएं।"
            ],
            command: "import signal\nsignal.signal(signal.SIGINT, handler)",
            video: "https://www.youtube.com/embed/E7wJTI-1dvQ"
        },
        mr: {
            why: ["तुम्ही प्रोग्राम मॅन्युअली थांबवलाय (Ctrl+C)."],
            avoid: ["Ctrl+C फक्त गरजेपर्यंत वापरा."],
            steps: [
                "Ctrl+C टाळा जोपर्यंत गरज नसेल.",
                "signal handling कोडमध्ये जोडा.",
                "कोड पुन्हा चालवा."
            ],
            command: "import signal\nsignal.signal(signal.SIGINT, handler)",
            video: "https://www.youtube.com/embed/E7wJTI-1dvQ"
        },
        tags: ["python", "keyboardinterrupt", "signal"]
    },

    "OverflowError": {
        en: {
            why: ["A calculation produced a number too large for Python to handle."],
            avoid: ["Check calculations for potential overflow."],
            steps: [
                "Use libraries like `decimal` or `math` for large numbers.",
                "Avoid infinite loops causing overflow.",
                "Run your code again."
            ],
            command: "import math\nmath.exp(700)",
            video: "https://www.youtube.com/embed/6iK4b3V66Fg"
        },
        hi: {
            why: ["कैलकुलेशन में एक संख्या बहुत बड़ी हो गई है जिसे Python संभाल नहीं सकता।"],
            avoid: ["संख्या के ओवरफ्लो की जांच करें।"],
            steps: [
                "`decimal` या `math` लाइब्रेरी का उपयोग करें।",
                "अनंत लूप से बचें।",
                "फिर से कोड चलाएं।"
            ],
            command: "import math\nmath.exp(700)",
            video: "https://www.youtube.com/embed/6iK4b3V66Fg"
        },
        mr: {
            why: ["कॅल्क्युलेशनमुळे फार मोठा नंबर तयार झाला आहे जो Python हाताळू शकत नाही."],
            avoid: ["ओव्हरफ्लो होण्याची शक्यता तपासा."],
            steps: [
                "`decimal` किंवा `math` लायब्ररी वापरा.",
                "अनंत लूप टाळा.",
                "कोड पुन्हा चालवा."
            ],
            command: "import math\nmath.exp(700)",
            video: "https://www.youtube.com/embed/6iK4b3V66Fg"
        },
        tags: ["python", "overflowerror", "math"]
    },

    "ZeroDivisionError": {
        en: {
            why: ["You tried to divide a number by zero, which is undefined."],
            avoid: ["Check divisor is not zero before division."],
            steps: [
                "Add checks before dividing.",
                "Handle zero divisor cases gracefully.",
                "Run your code again."
            ],
            command: "if divisor != 0:\n    result = numerator / divisor",
            video: "https://www.youtube.com/embed/H3dIYhtgZ1k"
        },
        hi: {
            why: ["आपने किसी संख्या को शून्य से विभाजित करने की कोशिश की है, जो असंभव है।"],
            avoid: ["विभाजक शून्य न हो यह जांचें।"],
            steps: [
                "डिवीजन से पहले चेक लगाएं।",
                "शून्य विभाजक के केस हैंडल करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "if divisor != 0:\n    result = numerator / divisor",
            video: "https://www.youtube.com/embed/H3dIYhtgZ1k"
        },
        mr: {
            why: ["तुम्ही एखाद्या नंबरला शून्याने भाग देण्याचा प्रयत्न केला आहे, जो परिभाषित नाही."],
            avoid: ["भाग देण्यापूर्वी divisor शून्य नाही याची खात्री करा."],
            steps: [
                "भाग देण्यापूर्वी तपासा.",
                "शून्य divisor केस हाताळा.",
                "कोड पुन्हा चालवा."
            ],
            command: "if divisor != 0:\n    result = numerator / divisor",
            video: "https://www.youtube.com/embed/H3dIYhtgZ1k"
        },
        tags: ["python", "zerodivisionerror", "division"]
    },

    "ValueError": {
        en: {
            why: ["You passed an argument of the right type but invalid value."],
            avoid: ["Check input values before using them."],
            steps: [
                "Validate your inputs.",
                "Add error handling.",
                "Run your code again."
            ],
            command: "int('123')",
            video: "https://www.youtube.com/embed/Zz7ZfCtyX70"
        },
        hi: {
            why: ["आपने सही प्रकार का लेकिन अमान्य मान पास किया है।"],
            avoid: ["इन्पुट मान जांचें।"],
            steps: [
                "अपने इनपुट वैल्यूज को वैध करें।",
                "एरर हैंडलिंग जोड़ें।",
                "फिर से कोड चलाएं।"
            ],
            command: "int('123')",
            video: "https://www.youtube.com/embed/Zz7ZfCtyX70"
        },
        mr: {
            why: ["तुम्ही योग्य प्रकार पण अवैध मूल्य दिले आहे."],
            avoid: ["इनपुट व्हॅल्यू तपासा."],
            steps: [
                "इनपुटची वैधता तपासा.",
                "त्रुटी हाताळणी करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "int('123')",
            video: "https://www.youtube.com/embed/Zz7ZfCtyX70"
        },
        tags: ["python", "valueerror", "input"]
    },

    "TypeError": {
        en: {
            why: ["You used an operation on a wrong data type."],
            avoid: ["Check data types before operations."],
            steps: [
                "Verify variable types.",
                "Convert types if necessary.",
                "Run your code again."
            ],
            command: "str(123)",
            video: "https://www.youtube.com/embed/7QXb9xIUEs0"
        },
        hi: {
            why: ["आपने गलत डेटा टाइप पर ऑपरेशन किया है।"],
            avoid: ["ऑपरेशन से पहले डेटा टाइप जांचें।"],
            steps: [
                "वेरिएबल के प्रकार जांचें।",
                "आवश्यकता हो तो टाइप बदलें।",
                "फिर से कोड चलाएं।"
            ],
            command: "str(123)",
            video: "https://www.youtube.com/embed/7QXb9xIUEs0"
        },
        mr: {
            why: ["तुम्ही चुकीच्या डेटा टाइपवर ऑपरेशन केलं आहे."],
            avoid: ["ऑपरेशनपूर्वी डेटा टाइप तपासा."],
            steps: [
                "व्हेरिएबल टाइप तपासा.",
                "आवश्यक असल्यास टाइप कन्व्हर्ट करा.",
                "कोड पुन्हा चालवा."
            ],
            command: "str(123)",
            video: "https://www.youtube.com/embed/7QXb9xIUEs0"
        },
        tags: ["python", "typeerror", "datatype"]
    },

    "EOFError": {
        en: {
            why: ["Input() reached EOF without reading any data."],
            avoid: ["Make sure input is provided."],
            steps: [
                "Check your input sources.",
                "Avoid calling input() without data.",
                "Run your code again."
            ],
            command: "input('Enter something: ')",
            video: "https://www.youtube.com/embed/iqRG1sdSbzM"
        },
        hi: {
            why: ["input() ने बिना डाटा पढ़े EOF पर पहुंच गया।"],
            avoid: ["सुनिश्चित करें कि इनपुट दिया गया है।"],
            steps: [
                "इनपुट स्रोत जांचें।",
                "data के बिना input() कॉल न करें।",
                "फिर से कोड चलाएं।"
            ],
            command: "input('Enter something: ')",
            video: "https://www.youtube.com/embed/iqRG1sdSbzM"
        },
        mr: {
            why: ["input() ने EOF पर्यंत कोणताही डेटा वाचला नाही."],
            avoid: ["इनपुट आहे याची खात्री करा."],
            steps: [
                "इनपुट स्रोत तपासा.",
                "डेटा नसताना input() कॉल करू नका.",
                "कोड पुन्हा चालवा."
            ],
            command: "input('Enter something: ')",
            video: "https://www.youtube.com/embed/iqRG1sdSbzM"
        },
        tags: ["python", "eoferror", "input"]
    },

















































};

function getFix() {
  let error = document.getElementById("errorInput").value;
  let lang = document.getElementById("language").value;

  let whyList = document.getElementById("whyText");
  let avoidList = document.getElementById("avoidText");
  let stepsList = document.getElementById("solutionSteps");
  let videoFrame = document.getElementById("videoFrame");
  let solutionSection = document.getElementById("solutionSection");
  let videoBox = document.getElementById("videoBox");
  let commandText = document.getElementById("commandText");

  whyList.innerHTML = "";
  avoidList.innerHTML = "";
  stepsList.innerHTML = "";
  commandText.textContent = "";  // Clear old command

  if (error === "") {
    alert("Please paste an error message!");
    return;
  }

  let matched = false;
  for (let key in solutions) {
    if (error.includes(key)) {
      solutions[key][lang].why.forEach(item => whyList.innerHTML += `<li>${item}</li>`);
      solutions[key][lang].avoid.forEach(item => avoidList.innerHTML += `<li>${item}</li>`);
      solutions[key][lang].steps.forEach(step => stepsList.innerHTML += `<li>${step}</li>`);
      videoFrame.src = solutions[key][lang].video;

      // SHOW command text here
      commandText.textContent = solutions[key][lang].command || "";

      matched = true;
      break;
    }
  }

  if (!matched) {
    whyList.innerHTML = "<li>Error not recognized.</li>";
    videoFrame.src = "";
    commandText.textContent = "";
  }

  solutionSection.classList.remove("hidden");
  videoBox.classList.remove("hidden");
  solutionSection.scrollIntoView({ behavior: "smooth" });
}

function copySolution() {
  const commandText = document.getElementById("commandText").textContent;
  if (commandText) {
    navigator.clipboard.writeText(commandText);
    alert("Command copied!");
  } else {
    alert("No command to copy.");
  }
}

