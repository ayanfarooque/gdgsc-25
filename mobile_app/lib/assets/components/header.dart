import 'package:flutter/material.dart';

class Header extends StatelessWidget {
  final VoidCallback onProfileTap;
  final VoidCallback onNotificationTap;
  final String profileImage;
  final String welcomeText;

  const Header({
    super.key,
    required this.onProfileTap,
    required this.onNotificationTap,
    required this.profileImage,
    required this.welcomeText,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(0.0, 70.0, 0.0, 0.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                ElevatedButton(
                  onPressed: onProfileTap,
                  style: ElevatedButton.styleFrom(
                    shape: const CircleBorder(),
                    padding: const EdgeInsets.all(8.0),
                    backgroundColor: const Color.fromARGB(26, 33, 41, 79),
                    elevation: 4,
                  ),
                  child: CircleAvatar(
                    radius: 24,
                    backgroundImage: AssetImage(profileImage),
                  ),
                ),
                Text(
                  welcomeText,
                  style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                CircleAvatar(
                  radius: 24,
                  backgroundColor: const Color.fromARGB(26, 33, 41, 79),
                  child: IconButton(
                    icon: const Icon(Icons.notifications),
                    onPressed: onNotificationTap,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
