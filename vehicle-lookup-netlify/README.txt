Simple steps — bilkul seedha (Hindi/Hinglish) 

1) GitHub pe naya repo banayo.
   - https://github.com pe jao -> New repository -> name: vehicle-lookup-netlify -> Create.

2) Apne computer pe folder khol ke ye zip extract karo. (ya direct push kar do).
   - Files: index.html, netlify.toml, package.json, netlify/functions/proxy.js, README.txt

3) Code GitHub pe push karo.
   - Agar nahi pata git, to Windows: use GitHub Desktop (graphical) — drag & drop folder to create repo & push.
   - Ya terminal:
     git init
     git add .
     git commit -m "init"
     git branch -M main
     git remote add origin <your-github-repo-url>
     git push -u origin main

4) Netlify pe site banayo:
   - https://app.netlify.com -> Login -> New site -> Import from Git -> choose your repo -> Deploy.
   - Netlify automatically builds and deploys. Thoda time lagega (1-2 minutes).

5) After deploy, open your site URL.
   - Waha vehicle number daalo, Search dabao. Mobile aur details screen pe aa jayenge.
   - CORS ka error nahi aayega kyunki browser sirf tumhare site se serverless function ko bulata hai, aur function external APIs ko server-side se call karta hai.

Local testing (optional, simple):
 - Install Netlify CLI:
   npm install -g netlify-cli
 - Fir folder me:
   npm install
   netlify dev
 - Browser me http://localhost:8888 open karo.

Agar koi step pe atak jao, muje yaha batao; main seedha bataunga kaunsa button dabana hai.
