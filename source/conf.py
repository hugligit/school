# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Curriculum'
copyright = '2023, Marcel Hrdina'
author = 'Marcel Hrdina'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

mathjax_path="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
mathjax_path="MathJax/es5/tex-mml-chtml.js"
jsmath_path = "jsMath/easy/load.js"
extensions = [
		"sphinx.ext.mathjax", 
		"sphinx_rtd_theme",
		"sphinx_toolbox.collapse",
		"sphinx_design",]
# extensions = ["sphinx.ext.jsmath"]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

# html_theme = 'alabaster'
# html_theme = 'classic'
html_theme = 'sphinx_rtd_theme'
# html_theme = 'bizstyle'
# html_theme = 'sphinx_seepln_theme'
html_static_path = ['_static']

html_css_files = ['hugli.css']


html_theme_options = {
    # 'analytics_id': 'G-XXXXXXXXXX',  #  Provided by Google in your dashboard
    # 'analytics_anonymize_ip': False,
    # 'logo_only': False,
    # 'display_version': True,
    # 'prev_next_buttons_location': 'bottom',
    # 'style_external_links': False,
    # 'vcs_pageview_mode': '',
    # 'style_nav_header_background': 'white',

    # Toc options
    'collapse_navigation': False,
    'sticky_navigation': True,
    'navigation_depth': 4,
    # 'includehidden': True,
    'titles_only': False
}
