import 'package:flutter/material.dart';
import '../components/header.dart';
import '../components/footer.dart';

class ViewScores extends StatefulWidget {
  State<ViewScores> createState() => _ScorePageState();
}

class _ScorePageState extends State<ViewScores> {
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
                    const SizedBox(height: 10),
                    Container(
                      margin: const EdgeInsets.fromLTRB(0.0, 30.0, 0.0, 0.0),
                      padding: const EdgeInsets.fromLTRB(4.0, 12.0, 4.0, 12.0),
                      decoration: BoxDecoration(
                        color: const Color.fromARGB(255, 236, 231, 202),
                        borderRadius: BorderRadius.circular(30),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const SizedBox(
                            height: 15,
                          ),
                          //calender
                          Container(
                            margin: EdgeInsets.all(8.0),
                            padding: const EdgeInsets.all(12),
                            decoration: BoxDecoration(
                              color: const Color.fromARGB(255, 245, 245, 221),
                              borderRadius: BorderRadius.circular(20),
                            ),
                            height: 350,
                            width: 400,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const Text(
                                  "Social Science",
                                  style: TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                      color: Colors.black),
                                ),
                                const SizedBox(height: 10),
                                _scoreTile("22/01/25", "SSTUT01", "SST",
                                    "Vikul J Pawar", "12/15"),
                                _scoreTile("24/01/25", "SCIUT01", "SCI",
                                    "Sol C Sharma", "15/15"),
                                _scoreTile("25/01/25", "HINUT01", "HIN",
                                    "Vinit Pandey", "14/15"),
                                _scoreTile("22/01/25", "SSTUT01", "SST",
                                    "Vikul J Pawar", "12/15"),
                                _scoreTile("24/01/25", "SCIUT01", "SCI",
                                    "Sol C Sharma", "15/15"),
                                _scoreTile("25/01/25", "HINUT01", "HIN",
                                    "Vinit Pandey", "14/15"),
                              ],
                            ),
                          ),
                          Container(
                            margin: EdgeInsets.all(8.0),
                            padding: const EdgeInsets.all(12),
                            decoration: BoxDecoration(
                              color: const Color.fromARGB(255, 245, 245, 221),
                              borderRadius: BorderRadius.circular(20),
                            ),
                            height: 350,
                            width: 400,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const Text(
                                  "Science",
                                  style: TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                      color: Colors.black),
                                ),
                                const SizedBox(height: 10),
                                _scoreTile("22/01/25", "SSTUT01", "SST",
                                    "Vikul J Pawar", "12/15"),
                                _scoreTile("24/01/25", "SCIUT01", "SCI",
                                    "Sol C Sharma", "15/15"),
                                _scoreTile("25/01/25", "HINUT01", "HIN",
                                    "Vinit Pandey", "14/15"),
                                _scoreTile("22/01/25", "SSTUT01", "SST",
                                    "Vikul J Pawar", "12/15"),
                                _scoreTile("24/01/25", "SCIUT01", "SCI",
                                    "Sol C Sharma", "15/15"),
                                _scoreTile("25/01/25", "HINUT01", "HIN",
                                    "Vinit Pandey", "14/15"),
                              ],
                            ),
                          ),
                          Container(
                            margin: EdgeInsets.all(8.0),
                            padding: const EdgeInsets.all(12),
                            decoration: BoxDecoration(
                              color: const Color.fromARGB(255, 245, 245, 221),
                              borderRadius: BorderRadius.circular(20),
                            ),
                            height: 350,
                            width: 400,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const Text(
                                  "Hindi",
                                  style: TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                      color: Colors.black),
                                ),
                                const SizedBox(height: 10),
                                _scoreTile("22/01/25", "SSTUT01", "SST",
                                    "Vikul J Pawar", "12/15"),
                                _scoreTile("24/01/25", "SCIUT01", "SCI",
                                    "Sol C Sharma", "15/15"),
                                _scoreTile("25/01/25", "HINUT01", "HIN",
                                    "Vinit Pandey", "14/15"),
                                _scoreTile("22/01/25", "SSTUT01", "SST",
                                    "Vikul J Pawar", "12/15"),
                                _scoreTile("24/01/25", "SCIUT01", "SCI",
                                    "Sol C Sharma", "15/15"),
                                _scoreTile("25/01/25", "HINUT01", "HIN",
                                    "Vinit Pandey", "14/15"),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ]))),
      bottomNavigationBar: Footer(
        selectedIndex: _selectedIndex,
        onItemTapped: _onItemTapped,
      ),
    );
  }

  Widget _scoreTile(
      String date, String id, String subject, String teacher, String marks) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4.0),
      child: Container(
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(8),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(date, style: const TextStyle(fontWeight: FontWeight.normal)),
            Text(id),
            Text(subject),
            Text(marks, style: const TextStyle(fontWeight: FontWeight.normal)),
          ],
        ),
      ),
    );
  }
}
