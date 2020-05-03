from tkinter import messagebox
from tkinter import *

root = Tk()

# showinfo, showwarning, showerror, asquestion, askokcancel, askyesorno
def pop():
    messagebox.showinfo("Hello there!","Important message here")

def win():
    global mylabel
    top = Toplevel()
    top.title("New Window")
    mylabel = Label(top,text="New second window!")
    mylabel.pack()
    button = Button(top,text='close',command=top.destroy)
    button.pack()

Button(text="Click Me",command=win).pack()


root.mainloop()