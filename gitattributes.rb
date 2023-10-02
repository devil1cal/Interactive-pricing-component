# Example of a `.gitattributes` file which reclassifies `.rb` files as Java:
*.rb linguist-language=Java

# Replace any whitespace in the language name with hyphens:
*.glyphs linguist-language=OpenStep-Property-List

# Language names are case-insensitive and may be specified using an alias.
# So, the following three lines are all functionally equivalent:
*.es linguist-language=jsx
*.es linguist-language=JSX
*.es linguist-language=React

*.kicad_pcb linguist-detectable
*.sch linguist-detectable
tools/export_bom.py -linguist-detectable