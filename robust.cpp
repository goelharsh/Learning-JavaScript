#include <iostream>
using namespace std;
bool validAge(string s)
{
    bool flag = true;
    for(auto i : s)
    {
        if(i>='0' && i<='9')
        {
            continue;
        }
        else{
            flag = false;
            break;
        }
    }
    return flag;
}
bool validGPA(string s)
{
    bool flag = true;
    bool dot = false;
    for(auto i : s)
    {
        if((i>='0' && i<='9') || (i=='.'))
        {
            if(i == '.')
            {
                if(dot == true)
                {
                    flag = false;
                    break;
                }
                else{
                    dot = true;
                }
            }
            continue;
        }
        else{
            flag = false;
            break;
        }
    }
    return flag;
}
int main() {
    string s;
    cout<<"Type Your Age: ";
    cin>>s;
    while(!validAge(s))
    {
        cout<<"Type Your Age: ";
        cin>>s;
    }
    string s1;
    cout<<"Type Your GPA: ";
    cin>>s1;
    while(!validGPA(s1))
    {
        cout<<"Type Your GPA: ";
        cin>>s1;
    }
    cout<<"Age = "<<s<<", GPA = "<<s1<<endl;

}