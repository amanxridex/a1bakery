import os
import re

css_content = open('css/index.css', 'r', encoding='utf-8').read()

# Split CSS by the major comment blocks
# The comment blocks look like:
# /* ========================================
#    SECTION NAME
# ======================================== */

sections = re.split(r'/\*\s*={40,}\s*\n\s*(.*?)\s*\n\s*={40,}\s*\*/', css_content)
# sections will be: [pre_content, 'SECTION NAME', section_content, 'SECTION NAME', section_content, ...]
# Actually, the first block might be pre_content.

css_blocks = {}
for i in range(1, len(sections), 2):
    title = sections[i].strip()
    content = sections[i+1].strip()
    css_blocks[title] = f"/* ========================================\n   {title}\n======================================== */\n{content}\n\n"

# The first element sections[0] is the very top before the first block (which in this case is probably empty)
pre_content = sections[0].strip()
if pre_content:
    css_blocks['PRE'] = pre_content + "\n\n"

# Define what goes where
mapping = {
    'global': [
        'MAISON BOULANGERIE - PREMIUM STYLES', 'BUTTONS', 'NAVBAR', 'SEARCH OVERLAY', 
        'CART SIDEBAR', 'MOBILE MENU', 'TOAST', 'PAGES', 'SECTION HEADERS', 'PRODUCTS', 
        'PAGE HEADERS', 'MODAL', 'FOOTER', 'RESPONSIVE', 'ANIMATIONS'
    ],
    'index': [
        'HERO SECTION', 'CATEGORIES', 'PROMO SECTION', 'TESTIMONIALS', 'NEWSLETTER'
    ],
    'menu': ['MENU PAGE'],
    'about': ['ABOUT PAGE'],
    'contact': ['CONTACT PAGE'],
    'checkout': ['CHECKOUT PAGE'],
    'success': ['SUCCESS PAGE']
}

for filename, titles in mapping.items():
    file_content = ""
    if filename == 'global' and 'PRE' in css_blocks:
        file_content += css_blocks['PRE']
        
    for title in titles:
        # Some titles might be slightly different in the actual file, so let's do partial matches
        matched_content = ""
        for key in css_blocks.keys():
            if title in key:
                matched_content += css_blocks[key]
        file_content += matched_content
        
    with open(f'css/{filename}.css', 'w', encoding='utf-8') as f:
        f.write(file_content)

print("CSS split completed successfully.")
