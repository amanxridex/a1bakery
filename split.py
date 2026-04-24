import os
import re

html_content = open('index.html', 'r', encoding='utf-8').read()

# Extract sections
# 1. Header & Shared components (Everything before HOME PAGE)
header_match = re.search(r'(.*?)(?=<!-- ========== HOME PAGE ========== -->)', html_content, re.DOTALL)
shared_top = header_match.group(1) if header_match else ""

# 2. Pages
pages = {}
page_names = [
    ('home', 'HOME PAGE', 'index.html'),
    ('menu', 'MENU PAGE', 'menu.html'),
    ('about', 'ABOUT PAGE', 'about.html'),
    ('contact', 'CONTACT PAGE', 'contact.html'),
    ('checkout', 'CHECKOUT PAGE', 'checkout.html'),
    ('success', 'ORDER SUCCESS PAGE', 'success.html')
]

for i in range(len(page_names)):
    key, start_comment, filename = page_names[i]
    start_tag = f'<!-- ========== {start_comment} ========== -->'
    if i < len(page_names) - 1:
        end_tag = f'<!-- ========== {page_names[i+1][1]} ========== -->'
        pattern = re.compile(rf'{start_tag}(.*?)(?={end_tag})', re.DOTALL)
    else:
        end_tag = '<!-- Footer -->'
        pattern = re.compile(rf'{start_tag}(.*?)(?={end_tag})', re.DOTALL)
        
    match = pattern.search(html_content)
    if match:
        pages[key] = match.group(0).strip()

# 3. Footer & Modals (Everything from Footer to the end)
footer_match = re.search(r'(<!-- Footer -->.*)', html_content, re.DOTALL)
shared_bottom = footer_match.group(1) if footer_match else ""

# Now let's fix the hrefs in the navigation within shared_top & mobile menu
def fix_links(html, current_page):
    # The links are currently like <a href="#menu" data-page="menu">
    # We want them to be <a href="menu.html">
    replacements = [
        (r'href="#home"[^>]*', 'href="index.html"'),
        (r'href="#menu"[^>]*', 'href="menu.html"'),
        (r'href="#about"[^>]*', 'href="about.html"'),
        (r'href="#contact"[^>]*', 'href="contact.html"'),
        (r'href="#checkout"[^>]*', 'href="checkout.html"')
    ]
    for old, new in replacements:
        html = re.sub(old, new, html)
        
    # Replace active class logic (very basic, just removing active from all and adding to current)
    html = re.sub(r'class="nav-link active"', 'class="nav-link"', html)
    if current_page == 'home':
        html = html.replace('href="index.html"', 'href="index.html" class="nav-link active"')
    elif current_page == 'menu':
        html = html.replace('href="menu.html"', 'href="menu.html" class="nav-link active"')
    elif current_page == 'about':
        html = html.replace('href="about.html"', 'href="about.html" class="nav-link active"')
    elif current_page == 'contact':
        html = html.replace('href="contact.html"', 'href="contact.html" class="nav-link active"')
        
    # Fix script/css tags
    html = html.replace('css/index.css', 'css/global.css">\n    <link rel="stylesheet" href="css/' + (current_page if current_page != 'home' else 'index') + '.css')
    
    return html

def fix_bottom_scripts(html, current_page):
    script_name = current_page if current_page != 'home' else 'index'
    new_scripts = f'<script src="js/global.js"></script>\n    <script src="js/{script_name}.js"></script>'
    html = html.replace('<script src="js/index.js"></script>', new_scripts)
    return html

# Write out the HTML files
for key, _, filename in page_names:
    if key in pages:
        top = fix_links(shared_top, key)
        bottom = fix_bottom_scripts(shared_bottom, key)
        
        # Remove display: none (the .page CSS rule handles it, but let's make sure it's active)
        # Actually in the original CSS, .page { display: none } and .page.active { display: block }
        # We will change the CSS so we don't need .page active. 
        # For now, let's just make sure it has 'active' class so it displays
        page_html = pages[key]
        if 'class="page"' in page_html and 'active' not in page_html:
            page_html = page_html.replace('class="page"', 'class="page active"')
            
        full_html = top + "\n" + page_html + "\n" + bottom
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(full_html)
            
print("HTML split completed successfully.")
