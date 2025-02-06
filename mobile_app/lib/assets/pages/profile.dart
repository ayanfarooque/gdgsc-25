import 'package:flutter/material.dart';

import '../components/header.dart';
import '../components/footer.dart';

class Profile extends StatefulWidget {
  @override
  State<Profile> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<Profile> {
  int _selectedIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });

    // Navigate to different pages based on index
    switch (index) {
      case 0:
        Navigator.pushNamed(context, '/');
        break;
      case 1:
        Navigator.pushNamed(context, '/assignment');
        break;
      case 2:
        Navigator.pushNamed(context, '/community');
        break;
      case 3:
        Navigator.pushNamed(context, '/aibot');
        break;
      case 4:
        Navigator.pushNamed(context, '/resources');
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 73, 171, 176),
      body: SingleChildScrollView(
          child: Padding(
              padding: const EdgeInsets.fromLTRB(0.0, 0.0, 0.0, 20.0),
              child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 16.0),
                      child:
                          // Top Bar
                          Header(
                              onProfileTap: () {
                                Navigator.pushNamed(context, '/profile');
                              },
                              onNotificationTap: () {
                                Navigator.pushNamed(context, '/notifications');
                              },
                              profileImage: 'assets/images/image3.png',
                              welcomeText: "WELCOME HASHIM"),
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    Container(
                      height: 650,
                      width: 420,
                      margin: const EdgeInsets.fromLTRB(0.0, 30.0, 0.0, 0.0),
                      padding: const EdgeInsets.fromLTRB(4.0, 12.0, 4.0, 12.0),
                      decoration: BoxDecoration(
                        color: const Color.fromARGB(255, 236, 231, 202),
                        borderRadius: BorderRadius.circular(30),
                      ),
                      child: Column(children: [
                        const SizedBox(
                          height: 15,
                        ),
                        CircleAvatar(
                          radius: 72,
                          backgroundImage:
                              AssetImage('lib/assets/images/image3.png'),
                        ),
                        const SizedBox(
                          height: 15,
                        ),
                        Container(
                            padding: EdgeInsets.all(4.0),
                            margin: EdgeInsets.all(8.0),
                            height: 190,
                            width: 600,
                            decoration: BoxDecoration(
                              color: const Color.fromARGB(25, 25, 24, 21),
                              borderRadius: BorderRadius.circular(30),
                            ),
                            child: Column(
                              children: [
                                Container(
                                    padding: EdgeInsets.fromLTRB(
                                        12.0, 8.0, 4.0, 8.0),
                                    margin: EdgeInsets.all(8.0),
                                    height: 165,
                                    width: 590,
                                    decoration: BoxDecoration(
                                      color: const Color(0xFF49ABB0),
                                      borderRadius: BorderRadius.circular(30),
                                      boxShadow: [
                                        BoxShadow(
                                            color: Colors.grey, blurRadius: 4)
                                      ],
                                    ),
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Text.rich(TextSpan(
                                          children: [
                                            TextSpan(
                                                text: "Name: ",
                                                style: TextStyle(
                                                    fontWeight:
                                                        FontWeight.bold)),
                                            TextSpan(text: "Hashim Ansari"),
                                          ],
                                        )),
                                        Text.rich(TextSpan(
                                          children: [
                                            TextSpan(
                                                text: "Student ID: ",
                                                style: TextStyle(
                                                    fontWeight:
                                                        FontWeight.bold)),
                                            TextSpan(text: "SC001"),
                                          ],
                                        )),
                                        Text.rich(TextSpan(
                                          children: [
                                            TextSpan(
                                                text: "Address: ",
                                                style: TextStyle(
                                                    fontWeight:
                                                        FontWeight.bold)),
                                            TextSpan(
                                                text:
                                                    "402,Sarvoday Ganga, Bhanu"),
                                          ],
                                        )),
                                        Text.rich(TextSpan(
                                          children: [
                                            TextSpan(
                                                text: "DOB: ",
                                                style: TextStyle(
                                                    fontWeight:
                                                        FontWeight.bold)),
                                            TextSpan(text: "02-05-2005"),
                                          ],
                                        )),
                                        Text.rich(TextSpan(
                                          children: [
                                            TextSpan(
                                                text: "Guardian: ",
                                                style: TextStyle(
                                                    fontWeight:
                                                        FontWeight.bold)),
                                            TextSpan(text: "Usman Suleman"),
                                          ],
                                        )),
                                        Text.rich(TextSpan(
                                          children: [
                                            TextSpan(
                                                text: "Class: ",
                                                style: TextStyle(
                                                    fontWeight:
                                                        FontWeight.bold)),
                                            TextSpan(text: "9th"),
                                          ],
                                        )),
                                      ],
                                    ))
                              ],
                            )),
                        const SizedBox(
                          height: 5,
                        ),
                        Container(
                            padding: EdgeInsets.all(4.0),
                            margin: EdgeInsets.all(8.0),
                            height: 125,
                            width: 600,
                            decoration: BoxDecoration(
                              color: const Color.fromARGB(25, 25, 24, 21),
                              borderRadius: BorderRadius.circular(30),
                            ),
                            child: Column(
                              children: [
                                Container(
                                    padding: EdgeInsets.fromLTRB(
                                        12.0, 8.0, 4.0, 8.0),
                                    margin: EdgeInsets.all(8.0),
                                    height: 100,
                                    width: 590,
                                    decoration: BoxDecoration(
                                      color: const Color(0xFF49ABB0),
                                      borderRadius: BorderRadius.circular(30),
                                      boxShadow: [
                                        BoxShadow(
                                            color: Colors.grey, blurRadius: 4)
                                      ],
                                    ),
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Text("Badges"),
                                        Container(
                                            padding: EdgeInsets.all(4.0),
                                            child: Row(
                                              children: [
                                                CircleAvatar(
                                                  radius: 25,
                                                  backgroundImage: AssetImage(
                                                      'lib/assets/images/badge1.png'),
                                                ),
                                                const SizedBox(
                                                  width: 6.0,
                                                ),
                                                CircleAvatar(
                                                  radius: 25,
                                                  backgroundImage: AssetImage(
                                                      'lib/assets/images/badge2.png'),
                                                ),
                                                const SizedBox(
                                                  width: 6.0,
                                                ),
                                                CircleAvatar(
                                                  radius: 25,
                                                  backgroundImage: AssetImage(
                                                      'lib/assets/images/badge3.png'),
                                                ),
                                              ],
                                            ))
                                      ],
                                    ))
                              ],
                            )),
                        const SizedBox(
                          height: 30,
                        ),
                        Center(
                          child: ElevatedButton(
                            onPressed: () {
                              // Add button functionality here
                            },
                            style: ElevatedButton.styleFrom(
                              backgroundColor:
                                  const Color(0xFF49ABB0), // Button color
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(
                                    20), // Rounded corners
                              ),
                              padding:
                                  EdgeInsets.zero, // Removes default padding
                              fixedSize:
                                  Size(180, 50), // Sets fixed width & height
                            ),
                            child: Text(
                              "Download Result",
                              style: TextStyle(
                                  color: Colors.black), // Ensures white text
                            ),
                          ),
                        )
                      ]),
                    ),
                  ]))),
      bottomNavigationBar: Footer(
        selectedIndex: _selectedIndex,
        onItemTapped: _onItemTapped,
      ),
    );
  }
}
