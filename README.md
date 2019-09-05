# UK Pound Currency SVG MIT

Feel free to use in any of your projects.

## Index.html

```
Common example of how to include SVG file in HTML.
```

### PHP

```
echo file_get_contents("filename.svg");
```

### .NET

```
public static IHtmlString InlineSvg(this HtmlHelper helper, string fileName)
{
    if (string.IsNullOrEmpty(fileName))
    {
        throw new ArgumentException("Path can't be empty", nameof(fileName));
    }
    if (!path.EndsWith("svg"))
    {
        throw new ArgumentException("Path must be to an svg file", nameof(path));
    }

    var fullPath = "~/Content/img/icons/" + filePath;

    return helper.Raw(File.ReadAllText(HostingEnvironment.MapPath(fullPath)));
}

@Html.InlineSvg("pound.svg")

http://hqwebdev.com/blog/inlining-svg-files-in-asp-net/
```
