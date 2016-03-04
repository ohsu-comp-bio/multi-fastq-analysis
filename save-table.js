
function exportData(type, filename)
{
    type = toUpperCase(type);
    var extension = "";
    
    switch (type)
    {
        case "CSV":
            extension = "CSV";
            break;
        case "XLS":
            extension = "XLSX";
            break;
        case "XLSX":
            extension = "XLSX";
            break;
        default:
            alert("Export type must be CSV or XLSX");
            return false;
    }
    

    var substrings = filename.split('.'); // split the string at '.'
    
    if (substrings.length > 1)
    {
        extension = substrings[-1];
        substrings.pop();
        filenamename = substrings.join(""); // rejoin the remaining elements without separator
    }
    
    filename = filename + "." + extension.toLowerCase();
    
    alasql("SELECT * INTO " + extension + " ('" + filename + "') FROM ?",[data]);
}
