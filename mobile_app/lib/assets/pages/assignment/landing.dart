import 'package:flutter/material.dart';

import '../../components/header.dart';
import '../../components/footer.dart';

class AssignmentLanding extends StatefulWidget {
  @override
  State<AssignmentLanding> createState() => _LandingPageState();
}

class _LandingPageState extends State<AssignmentLanding> {
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
                      height: 600,
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
