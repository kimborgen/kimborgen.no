import subprocess

output = subprocess.check_output(["gcloud", "beta", "logging", "logs", "list"])
strout = output.decode("utf-8").strip().split('\n')[1:-1]

for s in strout:
    try:
        o = subprocess.check_output(["gcloud", "beta", "logging", "logs", "delete", s])
        print(o)
    except:
        print("wat")
