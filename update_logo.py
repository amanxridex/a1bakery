import glob
import re

files = glob.glob('*.html')
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # We want to replace:
    # <span class="logo-main">A-ONE BAKERY</span>
    # <span class="logo-est">EST. 1974</span>
    # (sometimes it might have extra spaces or be on one line)
    
    # Use regex to replace the content inside the <a href="index.html" class="logo"> ... </a>
    # Actually, it's safer to find:
    pattern = r'(<a href="index\.html" class="logo">)\s*<span class="logo-main">A-ONE BAKERY</span>\s*<span class="logo-est">EST\. 1974</span>\s*</a>'
    replacement = r'\1\n                <img src="assets/a-one-logo1.png" alt="A-ONE Bakery Logo" class="nav-logo-img">\n            </a>'
    
    new_content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(new_content)

print("Updated logo in all HTML files.")
