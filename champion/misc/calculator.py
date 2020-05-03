from tkinter import *
import numbers

window = Tk()
window.title('Calculator')

frame = LabelFrame(window,text="Calculator",padx=10,pady=10)
frame.pack(padx=10,pady=10)

e = Entry(frame,width=35,borderwidth=5)
e.grid(row=0,column=0,columnspan=3,padx=10,pady=10)

def click(number):
    current = e.get()
    e.delete(0,END)
    e.insert(index=0,string=str(current+str(number)))


def add():
    global sum
    temp = e.get()
    sum = int(temp)
    e.delete(0,END)
        
def equal():
    second = e.get()
    e.delete(0,END)
    e.insert(0,sum+int(second))
    
    

button1 = Button(frame,text="1",width=5,height=5,command=lambda: click(1))
button2 = Button(frame,text="2",width=5,height=5,command=lambda: click(2))
button3 = Button(frame,text="3",width=5,height=5,command=lambda: click(3))
button4 = Button(frame,text="4",width=5,height=5,command=lambda: click(4))
button5 = Button(frame,text="5",width=5,height=5,command=lambda: click(5))
button6 = Button(frame,text="6",width=5,height=5,command=lambda: click(6))
button7 = Button(frame,text="7",width=5,height=5,command=lambda: click(7))
button8 = Button(frame,text="8",width=5,height=5,command=lambda: click(8))
button9 = Button(frame,text="9",width=5,height=5,command=lambda: click(9))
button0 = Button(frame,text="0", width=10,height=5,command=lambda: click(0))

addButton = Button(frame,text='+',width=5,height=5,command=add)
equalButton = Button(frame,text='=',width=5,height=5,command=equal)


button1.grid(row=3,column=0,padx=5,pady=5)
button2.grid(row=3,column=1)
button3.grid(row=3,column=2,padx=5,pady=5)
button4.grid(row=2,column=0,padx=5,pady=5)
button5.grid(row=2,column=1)
button6.grid(row=2,column=2,padx=5,pady=5)
button7.grid(row=1,column=0,padx=5,pady=5)
button8.grid(row=1,column=1)
button9.grid(row=1,column=2,padx=5,pady=5)
button0.grid(row=4,column=0,columnspan=1)

addButton.grid(row=4,column=1)
equalButton.grid(row=4,column=2)


window.mainloop()