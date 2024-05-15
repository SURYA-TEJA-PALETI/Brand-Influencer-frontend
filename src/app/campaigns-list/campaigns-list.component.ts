import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Campaign {
  id: number;
  name: string;
  Created_by: string;
  campaign_description: string;
  task_to_influencer: string;
  influencer_fee:number;
  negotiable:boolean;
  platforms:string;
  // Add more properties as needed
  expanded?: boolean;
}
@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css']
})
export class CampaignsListComponent implements OnInit {
  campaigns: Campaign[] = [
    { id: 1, name: 'Nike promotion for Shoes - 323', Created_by: 'Nike', campaign_description: "As part of this campaign, Nike is inviting influencers with a strong presence on platforms like Instagram, YouTube, and TikTok to join their exclusive influencer program. Here's a quick summary of the offer: Brand: Nike Product: Latest line of shoes Duration: 3-month partnership Benefits: Receive complimentary pairs of Nike shoes from the latest collection Gain exclusive access to Nike events and product launches Collaborate with other influencers in the Nike community Earn commission on sales generated through your unique referral link", task_to_influencer: "Nike expects influencers to create authentic and engaging content showcasing Nike shoes on their social media channels. This content should align with Nike's brand values of performance, innovation, and inclusivity.", influencer_fee: 100, negotiable:true, platforms:'Instagram, YouTube, TickTok' },
    { id: 1, name: 'Nike promotion for Shoes - 345', Created_by: 'Nike', campaign_description: "As part of this campaign, Nike is inviting influencers with a strong presence on platforms like Instagram to join their exclusive influencer program. Here's a quick summary of the offer: Brand: Nike Product: Latest line of shoes Duration: 3-month partnership Benefits: Receive complimentary pairs of Nike shoes from the latest collection Gain exclusive access to Nike events and product launches Collaborate with other influencers in the Nike community Earn commission on sales generated through your unique referral link", task_to_influencer: "Nike expects influencers to create authentic and engaging content showcasing Nike shoes on their social media channels. This content should align with Nike's brand values of performance, innovation, and inclusivity.", influencer_fee: 120, negotiable:false, platforms:'Instagram' },
    { id: 1, name: 'Nike promotion for Shoes - 368', Created_by: 'Nike', campaign_description: "As part of this campaign, Nike is inviting influencers with a strong presence on platforms like YouTube to join their exclusive influencer program. Here's a quick summary of the offer: Brand: Nike Product: Latest line of shoes Duration: 3-month partnership Benefits: Receive complimentary pairs of Nike shoes from the latest collection Gain exclusive access to Nike events and product launches Collaborate with other influencers in the Nike community Earn commission on sales generated through your unique referral link", task_to_influencer: "Nike expects influencers to create authentic and engaging content showcasing Nike shoes on their social media channels. This content should align with Nike's brand values of performance, innovation, and inclusivity.", influencer_fee: 130, negotiable:true, platforms:'YouTube' },
    // Add more campaigns as needed
  ];
  toggleExpansion(campaign: Campaign): void {
    campaign.expanded = !campaign.expanded;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToDashboard(): void {
    this.router.navigate(['/dashboard/surya']);
  }
}
