# DMARC-reader

This is written in HTML and JS.

It reads a DMARC xml file and displays certain values in a table. 

Next steps: Get it to be able to correctly read DMARC reports when the format changes. Some mail servers send reports with different elements and at the moment thos program can't tell, and will produce incorrect results. 

End goal? I would love it if it could grab DMARC reports from email, unzip them, store them in a data base and then auto generate alerts if anything suss comes up, as well as auto generating periodic reports, along with a basic GUI for searching and maybe even generating some graphs.. Authentication for user access, some degree of RBAC just for learning purposes. 
