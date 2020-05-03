export const overview = [
    {
        _id:"aa1",
        section_name:"Linux",
        series:[
            {
                _id:"bb1",
                series_name:"Bash",
                blogs:[
                    {
                        _id:"cc1",
                        title:"Grep"
                    },
                    {
                        _id:"cc2",
                        title:"Awk"
                    },
                    {
                        _id:"cc3",
                        title:"Sed"
                    },
                ]
            },
            {
                _id:"bb2",
                series_name:"Tools",
                blogs:[
                    {
                        _id:"cc4",
                        title:"Tcpdump"
                    },
                    {
                        _id:"cc5",
                        title:"Netstat"
                    },
                    {
                        _id:"cc6",
                        title:"Vi"
                    },
                ]
            }
        ]
    },
    {
        _id:"aa2",
        section_name:"Python",
        series:[
            {
                _id:"bb3",
                series_name:"Networking",
                blogs:[
                    {
                        _id:"cc7",
                        title:"Sockets"
                    },
                    {
                        _id:"cc8",
                        title:"SSL"
                    },
                ]
            },
            {
                _id:"bb4",
                series_name:"Programming",
                blogs:[
                    {
                        _id:"cc9",
                        title:"Multi_threading"
                    },
                    {
                        _id:"cd1",
                        title:"For Loop"
                    },
                    {
                        _id:"cd2",
                        title:"If Else Conditional"
                    },
                ]
            }
        ]
    }
]

export const blogs = [
    {
        _id:"cc1",
        title:"Grep", 
        date_created: 1586058516,
        content:"Grep is a command-line utility for searching plain-text data sets for lines that match a regular expression. Its name comes from the ed command g/re/p (globally search a regular expression and print), which has the same effect: doing a global search with the regular expression and printing all matching lines.[3][4] grep was originally developed for the Unix operating system, but later available for all Unix-like systems and some others such as OS-9.",
    },
    {
        _id:"cc2",
        title:"Awk",
        date_created: 1586058616,
        content:"Awk is a scripting language used for manipulating data and generating reports.The awk command programming language requires no compiling, and allows the user to use variables, numeric functions, string functions, and logical operators.Awk is a utility that enables a programmer to write tiny but effective programs in the form of statements that define text patterns that are to be searched for in each line of a document and the action that is to be taken when a match is found within a line. Awk is mostly used for pattern scanning and processing. It searches one or more files to see if they contain lines that matches with the specified patterns and then performs the associated actions.",
    },
    {
        _id:"cc3",
        title:"Sed",
        date_created: 1586058716,
        content:"How to use sed, a special editor for modifying files automatically. If you want to write a program to make changes in a file, sed is the tool to use.There are a few programs that are the real workhorse in the UNIX toolbox. These programs are simple to use for simple applications, yet have a rich set of commands for performing complex actions. Don't let the complex potential of a program keep you from making use of the simpler aspects. I'll start with the simple concepts and introduce the advanced topics later on.When I first wrote this (in 1994), most versions of sed did not allow you to place comments inside the script. Lines starting with the '#' characters are comments. Newer versions of sed may support comments at the end of the line as well.One way to think of this is that the old, 'classic' version was the basis of GNU, FreeBSD and Solaris verisons of sed. And to help you understand what I had to work with, here is the sed(1) manual page from Sun/Oracle.",
    },
    {
        _id:"cc4",
        title:"Tcpdump",
        date_created: 1586057516,
        content:"Tcpdump prints out a description of the contents of packets on a network interface that match the boolean expression the description is preceded by a time stamp, printed, by default, as hours, minutes, seconds, and fractions of a second since midnight. It can also be run with the -w flag, which causes it to save the packet data to a file for later analysis, and/or with the -r flag, which causes it to read from a saved packet file rather than to read packets from a network interface. It can also be run with the -V flag, which causes it to read a list of saved packet files. In all cases, only packets that match expression will be processed by tcpdump.Tcpdump will, if not run with the -c flag, continue capturing packets until it is interrupted by a SIGINT signal (generated, for example, by typing your interrupt character, typically control-C) or a SIGTERM signal (typically generated with the kill(1) command); if run with the -c flag, it will capture packets until it is interrupted by a SIGINT or SIGTERM signal or the specified number of packets have been processed.",
    },
    {
        _id:"cc5",
        title:"Netstat",
        date_created: 1586056516,
        content:"netstat (network statistics) is a command line tool for monitoring network connections both incoming and outgoing as well as viewing routing tables, interface statistics etc. netstat is available on all Unix-like Operating Systems and also available on Windows OS as well. It is very useful in terms of network troubleshooting and performance measurement. netstat is one of the most basic network service debugging tools, telling you what ports are open and whether any programs are listening on ports.",
    },
    {
        _id:"cc6",
        title:"Vi",
        date_created: 1586055516,
        content:"vi is a screen-oriented text editor originally created for the Unix operating system. The portable subset of the behavior of vi and programs based on it, and the ex editor language supported within these programs, is described by (and thus standardized by) the Single Unix Specification and POSIX.The original code for vi was written by Bill Joy in 1976, as the visual mode for a line editor called ex that Joy had written with Chuck Haley.[2] Bill Joy's ex 1.1 was released as part of the first Berkeley Software Distribution (BSD) Unix release in March 1978. It was not until version 2.0 of ex, released as part of Second BSD in May 1979 that the editor was installed under the name 'vi' (which took users straight into ex's visual mode),[3] and the name by which it is known today. Some current implementations of vi can trace their source code ancestry to Bill Joy; others are completely new, largely compatible reimplementations.",
    },
    {
        _id:"cc7",
        title:"Sockets",
        date_created: 1586054516,
        content:"The Python interface is a straightforward transliteration of the Unix system call and library interface for sockets to Python’s object-oriented style: the socket() function returns a socket object whose methods implement the various socket system calls. Parameter types are somewhat higher-level than in the C interface: as with read() and write() operations on Python files, buffer allocation on receive operations is automatic, and buffer length is implicit on send operations.",
    },
    {
        _id:"cc8",
        title:"SSL",
        date_created: 1586053516,
        content:"This module provides access to Transport Layer Security (often known as “Secure Sockets Layer”) encryption and peer authentication facilities for network sockets, both client-side and server-side. This module uses the OpenSSL library. It is available on all modern Unix systems, Windows, Mac OS X, and probably additional platforms, as long as OpenSSL is installed on that platform.",
    },
    {
        _id:"cc9",
        title:"Multi_threading",
        date_created: 1586052516,
        content:"The Thread class represents an activity that is run in a separate thread of control. There are two ways to specify the activity: by passing a callable object to the constructor, or by overriding the run() method in a subclass. No other methods (except for the constructor) should be overridden in a subclass. In other words, only override the __init__() and run() methods of this class. Once a thread object is created, its activity must be started by calling the thread’s start() method. This invokes the run() method in a separate thread of control.",
    },
    {
        _id:"cd1",
        title:"For Loop",
        date_created: 1586051516,
        content:"For loops are traditionally used when you have a block of code which you want to repeat a fixed number of times. The Python for statement iterates over the members of a sequence in order, executing the block each time. Contrast the for statement with the 'while' loop, used when a condition needs to be checked each iteration, or to repeat a block of code forever.",
    },
    {
        _id:"cd2",
        title:"If Else Conditional",
        date_created: 1586050516,
        content:"The middle two line are an if statement. It reads pretty much like English. If it is true that the weight is greater than 50, then print the statement about an extra charge. If it is not true that the weight is greater than 50, then don’t do the indented part: skip printing the extra luggage charge. In any event, when you have finished with the if statement (whether it actually does anything or not), go on to the next statement that is not indented under the if. In this case that is the statement printing 'Thank you.",
    },

]