import os
from jinja2 import Environment, FileSystemLoader

# Set the path to the templates directory
templates_dir = 'C:\\Users\\user\\Desktop\\portfoliowebsite\\templates'

# Check if the templates directory exists
if not os.path.exists(templates_dir):
    raise FileNotFoundError(f'Templates directory not found: {templates_dir}')

# Create a Jinja2 environment with the FileSystemLoader
env = Environment(loader=FileSystemLoader(templates_dir))

# Specify input and output file names
input_file = 'main.html'
output_file = 'index.html'

# Build the full path to the input template file
input_template_path = os.path.join(templates_dir, input_file)

# Check if the input template file exists
if not os.path.exists(input_template_path):
    raise FileNotFoundError(f'Template file not found: {input_template_path}')

# Read the template
template = env.get_template(input_file)

# Render the template
rendered = template.render()

# Write the result to the output file
with open(output_file, 'w') as ofile:
    ofile.write(rendered)

print(f'Template successfully rendered and saved to {output_file}')
