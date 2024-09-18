import time

start_time = time.time()  # บันทึกเวลาเริ่มต้น
elapsed_time = 0  # เก็บระยะเวลาที่เกิน
count = 0  # นับจำนวนรอบการวนลูป


while elapsed_time < 300:  # 5 นาที = 300 วินาที
    count += 1
    elapsed_time = time.time() - start_time  # คำนวณระยะเวลาที่ผ่านไป

    print(f"จำนวนรอบที่รันทั้งหมด: {count} รอบ ใน 5 นาที {elapsed_time:.2f} วินาที" )