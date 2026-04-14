import os
import re

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Rule 1 & 2: Remove dark: prefix and handle light-mode counterparts
    # Common patterns: bg-white dark:bg-black -> bg-black
    # We can search for classes like 'something dark:something-else'
    
    # Simple regex to find "className={...}" or "className='...'"
    # and then process the strings inside.
    
    # 1. Specifically handle the requested transitions first
    content = content.replace('text-neutral-900 dark:text-white', 'text-white')
    content = content.replace('border-neutral-200 dark:border-white/10', 'border-white/10')
    content = content.replace('bg-white dark:bg-black', 'bg-black')
    content = content.replace('bg-neutral-100 dark:bg-black/50', 'bg-black/50')
    content = content.replace('bg-neutral-50/50 dark:bg-white/2', 'bg-white/2')
    content = content.replace('bg-neutral-50 dark:bg-white/2', 'bg-white/2')
    
    # 2. General dark: removal
    # Find all instances of "dark:something"
    # We want to keep "something" and potentially remove the class preceding it if it was a light-mode variant.
    
    # This regex looks for a class followed by its dark: variant
    # e.g., bg-white dark:bg-black
    content = re.sub(r'(\s|^)([a-z0-9\-/\[\]\.]+) dark:([a-z0-9\-/\[\]\.\:]+)', r'\1\3', content)
    
    # Also handle standalone dark:
    content = content.replace('dark:', '')
    
    # 3. Smallest text color #909092
    content = content.replace('text-neutral-500', 'text-[#909092]')
    content = content.replace('text-white/40', 'text-[#909092]')
    content = content.replace('text-neutral-400', 'text-[#909092]')
    content = content.replace('text-white/30', 'text-[#909092]')
    content = content.replace('text-neutral-600', 'text-[#909092]') # Added neutral-600 for descriptions
    
    # 4. Remove light-mode specific classes that might be left over
    # This is tricky because some might be intentional.
    # But based on the prompt: "Remove any 'bg-white', 'bg-neutral-100', 'bg-neutral-200' that were intended for light mode."
    # I'll only remove them if they seem out of place in a dark-only theme.
    # Actually, the user said "Remove any 'bg-white', 'bg-neutral-100', 'bg-neutral-200' that were intended for light mode."
    # I'll remove them globally from these files since we are dark-only now.
    content = content.replace('bg-white', 'bg-black') # If bg-white remains, it should probably be black
    content = content.replace('bg-neutral-100', 'bg-neutral-900')
    content = content.replace('bg-neutral-200', 'bg-neutral-800')
    
    # 5. Remove Geist references
    content = re.sub(r'import { Geist.* } from "geist/font/.*";\n', '', content)
    content = content.replace('font-geist-sans', 'hanken-grotesk')
    content = content.replace('font-geist-mono', 'ui-monospace')
    
    # 6. Remove ThemeProvider imports and usage
    content = re.sub(r'import { ThemeProvider } from "@/components/ThemeProvider";\n', '', content)
    content = re.sub(r'<ThemeProvider[^>]*>', '', content)
    content = content.replace('</ThemeProvider>', '')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

files = [
    r"C:\Workspace\my-portfolio\src\components\sections\Hero.tsx",
    r"C:\Workspace\my-portfolio\src\app\layout.tsx",
    r"C:\Workspace\my-portfolio\src\app\blogs\[slug]\page.tsx",
    r"C:\Workspace\my-portfolio\src\app\blogs\page.tsx",
    r"C:\Workspace\my-portfolio\src\components\sections\Blogs.tsx",
    r"C:\Workspace\my-portfolio\src\components\sections\Stack.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\exptag.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\InteractiveGrid.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\SpotifyBar.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\Batch.tsx",
    r"C:\Workspace\my-portfolio\src\components\sections\Experience.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\UmamiCounter.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\statusLine.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\ProjectCard.tsx",
    r"C:\Workspace\my-portfolio\src\app\projects\page.tsx",
    r"C:\Workspace\my-portfolio\src\app\resume\page.tsx",
    r"C:\Workspace\my-portfolio\src\components\sections\Contributions.tsx",
    r"C:\Workspace\my-portfolio\src\components\sections\CTA.tsx",
    r"C:\Workspace\my-portfolio\src\components\sections\Projects.tsx",
    r"C:\Workspace\my-portfolio\src\app\page.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\BlurFade.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\CommandMenu.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\Cubes.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\GuitarString.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\OnekoCat.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\QuoteBar.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\ScrollProgress.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\SocialLinks.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\SocialLinksHero.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\SocialLinkWithPreview.tsx",
    r"C:\Workspace\my-portfolio\src\components\ui\ViewTracker.tsx",
    r"C:\Workspace\my-portfolio\src\data\experience.tsx"
]

for file in files:
    if os.path.exists(file):
        process_file(file)
        print(f"Processed {file}")
    else:
        print(f"File not found: {file}")
