const res = {
    data: {
      questions: [
        {
          questionName: "Adam's Bot",
          description: "Adam has always wanted to design a robot. Now, since he has accquirred the skills, he can fulfill his childhood dream. However, there are some flaws in the bot and it ignores some of the commands recived by it. Help Adam find the number of different co-ordinates the bot could end up at.",
          question: "#### Problem Statement\n Adam is a tech enthusiast and an electrical engineer. Adam has also been in love with the idea of robots since his childhood, Adam has always wanted to design a robot. Now, since he has accquirred the skills, he can fulfill his childhood dream. After a few weeks, Adam designs a basic bot than can only move in 4 directions(Up, Down, Left and Right). The bot is controlled remotely using a remote control which sends the signals to the bot to move either Left or Right or Up or Down. However, there are some flaws in the bot and it ignores some of the commands recived by it. Given an input signal( a combination of 'U', 'D', 'L' or 'R' commands), Adam wants to know the number of different co-ordinates the bot could end up at. The initial co-ordinates of the bot are (0,0).  \n\n **Input Format**\n\n The first line of the input will be an integer N which will denote the number of commands. The second line of input will be a string of length N comprising of 'U','D','L' and 'R'. \n\n **Output Format**\n\n The output will be an integer denoting the number of possible co-ordinates the bot could end up at.  \n\n **Constraints**\n\n 1<=N<=10^5 \n\n **Sample Input**\n\n 4 RRDU \n\n **Sample Output**\n\n 9 \n\n **Explanation**\n\n Some of the final possible co-ordinates can be (2,0), (1,1), (1,-1), (0,0) etc. ",
          id: "1",
        },
        {
          questionName: "Candy Store",
          description: "Can you successfully pick your order from a Candy Store from an infinite line of Candy Stores in front of you?",
          question:  "#### Problem Statement\n There is an infinite line of Candy Stores in front of you. All of the stores are numbered- Store 0, Store 1, Store 2.... and so on. You have to pick your order from Candy Store S. However, to reach the correct store you have to either skip forward or backward by p or q stores multiple times. You are standing in front of Candy Store 0 right now. Can you successfully pick your order from Candy Store S? If you can, print 1. If not, print 0.  \n\n **Input Format**\n\n The first line contains an integer T, the number of test cases. The first line of each test case contains an integer S which denotes the Candy Store where you should end up at. The second line of each test case contains an integer p . The third line of each test case contains an integer q . \n\n **Output Format**\n\n The output is an integer : 1 or 0, to show if you could successfully pick your order from Candy Store S or not. <br /> \n\n **Constraints**\n\n 1<T<=10000 1<=S,p,q<=10^18 \n\n **Sample Input**\n\n 1 11 2 5 <br /> \n\n **Sample Output**\n\n 1 \n\n **Explanation**\n\n You have to go to Candy Store 11. The steps are as follows, - Skip forward to Candy Store 5 (+5) - Skip forward to Candy Store 10 (+5) - Skip forward to Candy Store 15 (+5) - Skip backwards to Candy Store 13 (-2) - Skip backwards to Candy Store 11 (-2) 11= 5+5+5-2-2 So, the output is 1 as it is possible to reach Candy Store 11.  ",
          id: "2",
        },
        {
          questionName: "Chocolate",
          description: "Can you find the pieces of chocolate you get, from a bar you and your friend are sharing? But to get those you have to play a game.",
          question: "#### Problem Statement\n Your friend has N pieces of chocolate and he is willing to share some with you, but to get those you have to play a game. The game goes a follow, you keep dividing the pieces into 2 equal halves(without breaking any piece) and giving one half to  your friend until there is no piece remaining. Whenever you divide the pieces into 2 equal halves you can eat the leftover piece  if any. Find the pieces of chocolate you end up getting to eat. \n\n **Input Format**\n\n First line contains an integer T, the number of test cases.  T lines follow, each line contains a positive integer N.  \n\n **Output Format**\n\n For each test case print a single line containing the number of pieces of chocolate u get to eat.  \n\n **Constraints**\n\n 1<=T<=10^4  1<=N<=10^15 \n\n **Sample Input**\n\n 2 1 6  \n\n **Sample Output**\n\n 1 2 \n\n **Explanation**\n\n In the first test case, there is only 1 piece of chocolate so u can divide it into 2 equal halves of 0 pieces and eat the leftover 1 piece. In the second test case, you can divide 6 pieces of chocolate into equal halves of 3 pieces each. Giving one half to your friend now you have 3 pieces which u can divide into 2 halves of 1 piece each and eat the leftover piece. Giving one half to your friend u have 1 piece left which you will end up eating as explained in the first test case. ",
          id: "3",
        },
        {
          questionName: "ConMan",
          description: "Jac is a thief who specializes in breaking into safes. On one particular case, he encounters a safe with a strange combination lock. Help him defeat this lock!",
          question: "#### Problem Statement\n Jac is a thief who specializes in breaking into safes. On one particular case, he encounters a safe with a strange combination lock. The screen would display a series of 'T' numbers and for each number he had to sum up the digits in the even or odd places of the number, subject to if the number was displayed in an even or odd row respectively. Print the sum of even digits of a number or an odd number depending if line number is even or odd. The First line is numbered 1. \n\n **Input Format**\n\n First line contains an integer T, the number of test cases.  T lines follow, each line contains a positive integer A.  \n\n **Output Format**\n\n If the line number is even, then print the sum of digits in even positions of A, else, print the sum of digits in odd positions of A.  \n\n **Constraints**\n\n 1<=A<=10^15 1<=T<=10^4 \n\n **Sample Input**\n\n 2 121342 121342 \n\n **Sample Output**\n\n 6 7 \n\n **Explanation**\n\n The left most digit of a number is the first digit. 121342 is in row 1, which is an odd numbered row so the output will be 1+1+4 = 6, which is the sum of digits in the odd places of the number. 121342 is in row 2, which is an even numbered row so the output would be 2+3+2 = 7 , which is the sum of digits in the even places of the number. ",
          id: "4",
        },
        {
          questionName: "Simple Champagne Tower",
          description: "Rosa's and her sister Lisa decided to make a Champagne Tower for a party. After making the Simple Champagne Tower, Lisa starts filling the glasses of the tower with Dom Perignon- Rosa's favourite champagne. How many glasses can they fill?",
          question: "#### Problem Statement\n Rosa's 21st birthday is coming up and her family is planning an amazing party for her. Her sister Lisa decides to make a Champagne Tower for the party. As Lisa has never tried this before, the structure of her tower is quite simple. It will be a triangular tower with N levels. The number of champagne glasses in each level is equal to the level number. The maximum capacity of each champagne glass is 100ml. After making the Simple Champagne Tower, Lisa starts filling the glasses of the tower with Dom Perignon- Rosa's favourite champagne. She starts pouring into the topmost glass at the rate of 100ml per second. Once a glass becomes full, the champagne pours over along its edges equally into the two glasses immediately under it. After K seconds, Lisa's mother asks her - 'How many glasses have you completely filled so far?' What is Lisa's answer? \n\n **Input Format**\n\n The first line contains an integer T, the number of test cases. The first line of each test case is an integer N which is equal to the number of levels in Lisa's Champagne Tower. The second line of each test case is an integer K which denotes the number of seconds after Lisa started pouring the champagne when her mother asked her the question. \n\n **Output Format**\n\n The output is an integer which denotes the number of completely filled champagne glasses after K seconds. \n\n **Constraints**\n\n 1<=T<=10  1<=N<=1000 1<=K<=5000 \n\n **Sample Input**\n\n 1 3 2 \n\n **Sample Output**\n\n 1 \n\n **Explanation**\n\n The Champagne Tower with N=3 looks like     A    B C   D E F where A...F are champagne glasses.  Given K=2, - When K=1, glass A will be completely filled. - When K=2, glasses B and C will both be half-filled. Hence, after K=2, the number of completely filled champagne glasses=1. ",
          id: "5",
        },
      ],
    },
  };

export default res;