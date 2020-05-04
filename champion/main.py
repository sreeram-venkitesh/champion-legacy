import tkinter as tk
from tkinter import *
# To change the theme or something
#from tkinter.ttk import *
import tkinter.font as tkFont
from classes.doctor import Doctor
from classes.dealer import Dealer
from classes.medicine import Medicine

global doctorList


def center(win):
    win.update_idletasks()
    width = win.winfo_width()
    height = win.winfo_height()
    x = (win.winfo_screenwidth() // 2) - (width // 2)
    y = (win.winfo_screenheight() // 2) - (height // 2)
    win.geometry('{}x{}+{}+{}'.format(width, height, x, y))

class MainWindow:
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("Champion")
        w, h = self.window.winfo_screenwidth(), self.window.winfo_screenheight()
        self.window.geometry("%dx%d+0+0" % (w, h))
        self.menuinit(self.window)
        #self.drawFrames(self.window)
        w = self.window.winfo_screenwidth()
        h = self.window.winfo_screenheight()
        self.doctorFrame = LabelFrame(self.window,width=w/2,height=h/2,text="Doctors",padx=10,pady=10)
        self.doctorFrame.place(x=10, y=0, anchor="nw", width=w/4, height=h/2)
        self.dealerFrame = LabelFrame(self.window,width=w/2,height=h/4,text="Dealers",padx=10,pady=5)
        self.dealerFrame.place(x=10, y=h/2+5, anchor="nw", width=w/4, height=h/2.6)

        self.medicineFrame = LabelFrame(self.window,text="Medicine Stock",padx=10,pady=10)
        self.medicineFrame.place(x=w-w/4,y=0,anchor="nw",width=w/4.1,height=h-130)


        self.doctorList = Listbox(self.doctorFrame,width=300,height=400)
        self.doctorList.pack()
        self.dealerList = Listbox(self.dealerFrame,width=300,height=400)
        self.dealerList.pack()
        self.medicineList = Listbox(self.medicineFrame,width=300,height=1000)
        self.medicineList.pack()
        self.window.mainloop()

    def callback(self, P):
        if str.isdigit(P) or P == "":
            return True
        else:
            return False


    def getDoctor(self,top,name,address,phone):
        self.doctorList.insert(0,name)
        self.doctorList.pack()
        top.destroy()
        return
    
    def getDealer(self,top,name,address,phone):
        self.dealerList.insert(0,name)
        self.dealerList.pack()
        top.destroy()
        return
    
    def getMedicine(self,top,name,batch,expiry,typeMed):
        self.medicineList.insert(0,name)
        self.medicineList.pack()
        top.destroy()
        return

 
    def newDoctor(self):
        global mylabel
        top = Toplevel(padx=10,pady=10,width=570,height=380)
        center(top)
        top.title("Add New Doctor")
        frame = Frame(top,padx=10,pady=10)
        frame.grid(row=0,column=0,padx=10,pady=10)
        mylabel = Label(frame,text="Enter Doctor Details",anchor="w")
        mylabel.grid(row=0,column=0,pady=5,columnspan=2)
        nameFrame = LabelFrame(frame,text="Enter Name",padx=10,pady=10)
        nameFrame.grid(row=1,column=0,pady=10,columnspan=2)
        name = Entry(nameFrame,text="name",width=60)
        name.grid(row=0,column=0)
        addressFrame = LabelFrame(frame,text="Enter Address",padx=10,pady=10)
        addressFrame.grid(row=2,column=0,pady=10,columnspan=2)
        address = Entry(addressFrame,text="address",width=60)
        address.grid(row=0,column=0)
        phoneFrame = LabelFrame(frame,text="Enter Phone Number",padx=10,pady=10)
        phoneFrame.grid(row=4,column=0,pady=10,columnspan=2)
        phone = Entry(phoneFrame,text="phone",width=60)
        phone.grid(row=0,column=0)
        button = Button(frame,text='OK',width=20,height=3,command=lambda: self.getDoctor(top,name.get(),address.get(),phone.get()))
        button.grid(row=5,column=0,pady=10)
        button = Button(frame,text='Close',command=top.destroy,width=20,height=3)
        button.grid(row=5,column=1,pady=10)
        
        

    def newDealer(self):
        global mylabel
        top = Toplevel(padx=10,pady=10,width=570,height=380)
        center(top)
        top.title("Add New Dealer")
        frame = Frame(top,padx=10,pady=10)
        frame.grid(row=0,column=0,padx=10,pady=10)
        mylabel = Label(frame,text="Enter Dealer Details",anchor="w")
        mylabel.grid(row=0,column=0,pady=5,columnspan=2)
        nameFrame = LabelFrame(frame,text="Enter Name",padx=10,pady=10)
        nameFrame.grid(row=1,column=0,pady=10,columnspan=2)
        name = Entry(nameFrame,text="name",width=60)
        name.grid(row=0,column=0)
        addressFrame = LabelFrame(frame,text="Enter Address",padx=10,pady=10)
        addressFrame.grid(row=2,column=0,pady=10,columnspan=2)
        address = Entry(addressFrame,text="address",width=60)
        address.grid(row=0,column=0)
        phoneFrame = LabelFrame(frame,text="Enter Phone Number",padx=10,pady=10)
        phoneFrame.grid(row=4,column=0,pady=10,columnspan=2)
        phone = Entry(phoneFrame,text="phone",width=60)
        phone.grid(row=0,column=0)
        button = Button(frame,text='OK',width=20,height=3,command=lambda: self.getDealer(top,name.get(),address.get(),phone.get()))
        button.grid(row=5,column=0,pady=10)
        button = Button(frame,text='Close',command=top.destroy,width=20,height=3)
        button.grid(row=5,column=1,pady=10)
    
    def newMedicine(self):
        global mylabel
        top = Toplevel(padx=10,pady=10,width=570,height=380)
        center(top)
        top.title("Add New Medicine Entry")
        frame = Frame(top,padx=10,pady=10)
        frame.grid(row=0,column=0,padx=10,pady=10)
        mylabel = Label(frame,text="Enter Medicine Details",anchor="w")
        mylabel.grid(row=0,column=0,pady=5,columnspan=2)
        nameFrame = LabelFrame(frame,text="Enter Name",padx=10,pady=10)
        nameFrame.grid(row=1,column=0,pady=10,columnspan=2)
        name = Entry(nameFrame,text="name",width=60)
        name.grid(row=0,column=0)
        batchFrame = LabelFrame(frame,text="Enter Batch",padx=10,pady=10)
        batchFrame.grid(row=2,column=0,pady=10,columnspan=2)
        batch = Entry(batchFrame,text="batch",width=60)
        batch.grid(row=0,column=0)
        expiryFrame = LabelFrame(frame,text="Enter Expiry",padx=10,pady=10)
        expiryFrame.grid(row=4,column=0,pady=10,columnspan=2)
        expiry = Entry(expiryFrame,text="phone",width=60)
        expiry.grid(row=0,column=0)
        typeMedFrame = LabelFrame(frame,text="Enter Type of Medicine",padx=10,pady=10)
        typeMedFrame.grid(row=4,column=0,pady=10,columnspan=2)
        typeMed = Entry(typeMedFrame,text="phone",width=60)
        typeMed.grid(row=0,column=0)
        button = Button(frame,text='OK',width=20,height=3,command=lambda: self.getMedicine(top,name.get(),batch.get(),expiry.get(),typeMed.get()))
        button.grid(row=5,column=0,pady=10)
        button = Button(frame,text='Close',command=top.destroy,width=20,height=3)
        button.grid(row=5,column=1,pady=10)

    def menuinit(self,window):
        mainmenu = Menu(window)         
        window.config(menu=mainmenu)

        file = Menu(mainmenu,tearoff=0)
        mainmenu.add_cascade(label="File",menu=file)
        file.add_command(label='New Doctor',command=self.newDoctor)
        file.add_command(label='New Dealer',command=self.newDealer)
        file.add_command(label='New Medicine',command=self.newMedicine)
        file.add_command(label='Exit',command=self.window.quit)

    def drawFrames(self,window):

        
        doctorFrame = LabelFrame(window,width=w/2,height=h/2,text="Doctors",padx=10,pady=10)
        doctorFrame.place(x=10, y=0, anchor="nw", width=w/4, height=h/2)
        dealerFrame = LabelFrame(window,width=w/2,height=h/4,text="Dealers",padx=10,pady=5)
        dealerFrame.place(x=10, y=h/2+5, anchor="nw", width=w/4, height=h/2.6)

        medicineFrame = LabelFrame(window,text="Medicine Stock",padx=10,pady=10)
        medicineFrame.place(x=w-w/4,y=0,anchor="nw",width=w/4.1,height=h-130)


        self.doctorList = Listbox(doctorFrame,width=300,height=400)
        self.doctorList.pack()
        self.dealerList = Listbox(dealerFrame,width=300,height=400)
        self.dealerList.pack()
        self.medicineList = Listbox(medicineFrame,width=300,height=1000)
        self.medicineList.pack()


if __name__ == '__main__':
    app = MainWindow()
