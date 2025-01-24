class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
    BROWN = '\033[33m'

def triangle(height):
  char = "#"
  space = " "
  print(bcolors.FAIL + " "*height + "X" + " " * height)
  for i in range(1,height + 1):
      print(bcolors.OKGREEN + space * (height - i) +  char * i + " " + char * i + space * (height -i))
  print(bcolors.BROWN + " "*height + "||" + " " * height)

triangle(11)