import tkinter as tk
from tkinter import *
#from tkinter.ttk import *
import tkinter.font as tkFont
from classes.doctor import Doctor
from classes.dealer import Dealer
from classes.medicine import Medicine

#fontStyle = tkFont.Font(family="Lucida Grande", size=20)

class MainWindow:
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("Champion")
        w, h = self.window.winfo_screenwidth(), self.window.winfo_screenheight()
        self.window.geometry("%dx%d+0+0" % (w, h))
        self.menuinit(self.window)
        self.drawFrames(self.window)
        self.window.mainloop()

        
    def newDoctor(self):
        return

    def newDealer(self):
        return
    
    def newMedicine(self):
        return

    def menuinit(self,window):
        mainmenu = Menu(window)         
        window.config(menu=mainmenu)

        file = Menu(mainmenu)
        mainmenu.add_cascade(label="File",menu=file)
        file.add_command(label='New Doctor',command=self.newDoctor)
        file.add_command(label='New Dealer',command=self.newDealer)
        file.add_command(label='New Medicine',command=self.newMedicine)
        file.add_command(label='Exit',command=self.window.quit)

    def drawFrames(self,window):
        w, h = window.winfo_screenwidth(), window.winfo_screenheight()

        
        doctorFrame = LabelFrame(window,width=w/2,height=h/2,text="Doctors")
        doctorFrame.place(x=0, y=0, anchor="nw", width=w/4, height=h/2)
        dealerFrame = LabelFrame(window,width=w/2,height=h/4,text="Dealers")
        dealerFrame.place(x=0, y=h/2+5, anchor="nw", width=w/4, height=h/2.6)

        medicineFrame = LabelFrame(window,text="Medicine Stock").place(x=w-w/4,y=0,anchor="nw",width=w/4,height=h)

    
        doc = Label(doctorFrame,text="Doctors!").pack()

        deal = Label(dealerFrame,text="Dealers").pack()

    
 



if __name__ == '__main__':
    app = MainWindow()
