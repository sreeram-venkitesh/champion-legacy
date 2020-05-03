from tkinter import *

root = Tk()

menu = Menu(root)
root.config(menu=menu)

file = Menu(menu)
menu.add_cascade(label="File", menu=file)
file.add_command(label='New')

root.mainloop()


