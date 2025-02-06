import 'package:flutter/material.dart';

import '../../components/header.dart';
import '../../components/footer.dart';

class CommunityLanding extends StatefulWidget {
  @override
  State<CommunityLanding> createState() => _LandingPageState();
}

class _LandingPageState extends State<CommunityLanding> {
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
                  ]))),
      bottomNavigationBar: Footer(
        selectedIndex: _selectedIndex,
        onItemTapped: _onItemTapped,
      ),
    );
  }
}
