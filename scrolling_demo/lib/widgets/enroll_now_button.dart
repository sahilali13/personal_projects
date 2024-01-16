import 'package:flutter/material.dart';

import 'package:google_fonts/google_fonts.dart';

import '../data/colors.dart';

class EnrollNowButton extends StatelessWidget {
  const EnrollNowButton({
    super.key,
    required this.customWidth,
    required this.customHeight,
  });

  final double customWidth;
  final double customHeight;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: ButtonStyle(
        backgroundColor: MaterialStateProperty.all<Color>(
          secondaryColor,
        ),
        foregroundColor: MaterialStateProperty.all<Color>(
          whiteColor,
        ),
        shape: MaterialStateProperty.all<OutlinedBorder>(
          RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
        ),
      ),
      onPressed: () {},
      child: Padding(
        padding: EdgeInsets.all(customWidth * 0.01),
        child: Text(
          'ENROLL NOW',
          style: GoogleFonts.aBeeZee(
              fontSize: customHeight * 0.033, fontWeight: FontWeight.bold),
        ),
      ),
    );
  }
}
