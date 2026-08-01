import os
import glob

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Replacements for root div
    content = content.replace('bg-[#F5F5F7] text-[#1D1D1F]', 'bg-transparent text-white/90')
    content = content.replace('bg-[#F5F5F7]', 'bg-transparent')
    
    # Headers and text
    content = content.replace('text-[#1D1D1F]', 'text-white')
    content = content.replace('text-[#86868B]', 'text-white/50')
    
    # Cards and borders
    content = content.replace('bg-white', 'bg-[#13151A]/80')
    content = content.replace('border-black/[0.08]', 'border-white/[0.04]')
    content = content.replace('border-black/[0.06]', 'border-white/[0.06]')
    content = content.replace('border-black/[0.04]', 'border-white/[0.04]')
    content = content.replace('bg-[#0071E3]', 'bg-[#0071E3]') # No change needed

    with open(filepath, 'w') as f:
        f.write(content)

for filepath in glob.glob('src/app/**/page.tsx', recursive=True):
    # skip ones we already fixed carefully
    if 'process/' in filepath or 'solutions/' in filepath or filepath == 'src/app/page.tsx':
        continue
    process_file(filepath)
    print(f"Fixed {filepath}")
